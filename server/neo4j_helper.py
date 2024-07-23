from neo4j import GraphDatabase

class Neo4jHelper:
    def __init__(self, uri, username, password):
        self.driver = GraphDatabase.driver(uri, auth=(username, password))

    def close(self):
        self.driver.close()

    def create_user_and_product_relationship(self, user_id, product_id):
        with self.driver.session() as session:
            session.write_transaction(self._create_and_link_nodes, user_id, product_id)

    def remove_user_and_product_relationship(self, user_id, product_id):
        with self.driver.session() as session:
            session.write_transaction(self._remove_link_nodes, user_id, product_id)

    @staticmethod
    def _create_and_link_nodes(tx, user_id, product_id):
        tx.run("""
            MERGE (u:User {id: $user_id})
            MERGE (p:Product {id: $product_id})
            MERGE (u)-[:LIKED]->(p)
            """, user_id=user_id, product_id=product_id)
        print("Created a relationship between user and product")

    @staticmethod
    def _remove_link_nodes(tx, user_id, product_id):
        tx.run("""
            MATCH (u:User {id: $user_id})-[r:LIKED]->(p:Product {id: $product_id})
            DELETE r
            """, user_id=user_id, product_id=product_id)
        print("Deleted the relationship between user and product")
        
        
    @staticmethod
    def create_relationship_for_order(driver, user_id, product_id):
        with driver.session() as session:
            session.run("""
                MERGE (u:User {id: $user_id})
                MERGE (p:Product {id: $product_id})
                MERGE (u)-[:ORDERED]->(p)
                """, user_id=user_id, product_id=product_id)
            print("Created a relationship between user and product")

#Below section is for recommendation :
       
    @staticmethod
    def recommend_products(driver, user_id):
        with driver.session() as session:
            result = session.run(
                """
                MATCH (u:User {id: $user_id})-[:LIKED|ORDERED]->(p:Product)
                MATCH (p)<-[:LIKED|ORDERED]-(other:User)-[:LIKED|ORDERED]->(rec:Product)
                WHERE u <> other
                RETURN DISTINCT rec
                LIMIT 10
                """,
                user_id=user_id
            )
            recommendations = [record['rec'] for record in result]
            return recommendations


    @staticmethod
    def recommend_by_path(driver, user_id):
        with driver.session() as session:
            result = session.run(
                """
                MATCH (u:User {id: $user_id}), (rec:Product)
                WHERE EXISTS((u)-[:LIKED|ORDERED*1..3]->(rec))
                RETURN DISTINCT rec
                LIMIT 10
                """,
                user_id=user_id
            )
            recommendations = [record['rec'] for record in result]
            return recommendations

    @staticmethod
    def recommend_trending_products(driver):
        with driver.session() as session:
            # Query for most ordered products across all users
            result = session.run("""
                MATCH (:User)-[:ORDERED]->(p:Product)
                RETURN p.id AS id, count(*) AS orders
                ORDER BY orders DESC
                LIMIT 10
                """)
            
            recommendations = [record for record in result]

            # If there are fewer than 10 recommendations, add the most liked products across all users
            if len(recommendations) < 10:
                additional_result = session.run("""
                    MATCH (p:Product)<-[:LIKED]-(:User)
                    WHERE NOT (p.id IN $current_recommendations)
                    RETURN p.id AS id, count(*) AS likes
                    ORDER BY likes DESC
                    LIMIT $limit
                    """, current_recommendations=[rec['id'] for rec in recommendations], limit=10 - len(recommendations))
                
                additional_recommendations = [record for record in additional_result]
                recommendations.extend(additional_recommendations)
            
            return recommendations