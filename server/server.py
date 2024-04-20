from flask import Flask, jsonify,request,url_for
from flask_cors import CORS
import json
import pymongo
from pymongo.mongo_client import MongoClient
from bson import ObjectId
from flask_mail import Mail, Message
import secrets
from bcrypt import hashpw, gensalt, checkpw



# from pymongo.server_api import ServerApi


# uri = "mongodb+srv://trshyam0007:jVYxhlu3PNxwPrD1@cluster0.cmcdubi.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient('localhost', 27017)


app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Set your SMTP server
app.config['MAIL_PORT'] = 587  # Set your SMTP port
app.config['MAIL_USE_TLS'] = True  # Enable TLS
app.config['MAIL_USERNAME'] = 't.r.shyam0007@gmail.com'  # Set your email username
app.config['MAIL_PASSWORD'] = 'qakr qnca qygs hoij'  # Set your email password
app.config['MAIL_DEFAULT_SENDER'] = 't.r.shyam0007@gmail.com'  # Set your default sender

app.config['SECRET_KEY'] = '12345'

mail = Mail(app)

CORS(app, origins='http://localhost:5173', methods=['POST'])

client = MongoClient('localhost', 27017)
db = client['users-e-com']
carts_collection = db['carts']

@app.route('/api/data', methods=['GET'])
def get_data():
    with open('server\DatabaseSchema.json', 'r') as file:
        data = json.load(file)
  
    return jsonify(data)


@app.route('/api/productsDB', methods=['GET'])
def get_products():
    with open('server/products_db.json', 'r') as file:
        data = json.load(file)
  
    return jsonify(data)


def generate_confirmation_token():
    return secrets.token_urlsafe(16)


def send_confirmation_email(email, confirmation_token):
    # confirmation_url = url_for('signup', token=confirmation_token, _external=True)
    msg = Message('Confirmation Email', recipients=[email])
    msg.body = f'Thank you for signing up!! Please click the following link to confirm your email: {confirmation_token}'
    mail.send(msg)





@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    email = data.get('email')
    password = data.get('password')
    phNumber=data.get('phNumber')
    print(data)
    print(phNumber)
    print(phNumber)
    print(phNumber)
    print("Signing up user...")

    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
        
        # Assuming you have a database named 'users' and a collection named 'accounts'
        db = client['users-e-com']
        collection = db['accounts']

        existing_user = collection.find_one({'email': email})
        if existing_user:
            print("Email already exists in the database.")
            return  'User Already exists', 400  # Return a 400 Bad Request status
        
        
        # Generate unique user ID with "abrt" prefix
        user_id = "eabrt" + str(ObjectId())

        # confirmation_token = generate_confirmation_token()
        
        
        # Insert user data into the collection
        user_data = {
            '_id': user_id,
            'firstName':firstName,
            'lastName':lastName,
            'phnumber':phNumber,
            'email': email,
            'password': hashpw(password.encode('utf-8'), gensalt()),
            'address':None,
            'zipCode':None,
            'confirmed': False,  # Mark the user as unconfirmed initially
            # 'confirmation_token': confirmation_token
        }
        result = collection.insert_one(user_data)
        print("User signed up successfully. Inserted ID:", user_id)
        # print(email)
        # send_confirmation_email(email, confirmation_token)
        print("mail Send")
        return "True"

    except Exception as e:
        print(e)
        return "False"

    # Process the received data (e.g., save it to a database)

    return jsonify({'message': 'User signed up successfully'})




@app.route('/api/signin', methods=["POST"])
def signin():
    data = request.json
    email=data.get('email')
    password=data.get('password')
    # password="password"
    print(email)
    print(password)
    
    db = client['users-e-com']
    collection = db['accounts']
    user =collection.find_one({'email': email})
    print(user)
    
    if user and user.get('password'):  # Check if user exists and has password
        if checkpw(password.encode('utf-8'), user['password']):
            user_data = {key: value for key, value in user.items() if key != 'password'}  # Use secure password hashing
            return jsonify({'user': user_data}), 200
        else:
            return jsonify({'message': 'Invalid email or password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404
    
@app.route('/api/cart/add', methods=['POST'])
def add_to_cart():
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")

        # Assuming the request includes a JSON body with userId and productId
        data = request.json
        userId = data.get('userId')
        productId = data.get('productId')
        quantity = data.get('quantity')
        print("quantity : ",quantity)

        # Connect to the MongoDB and add the product to the user's cart
        db = client['users-e-com']
        collection = db['carts']

        # Check if the user's cart already exists
        user_cart = collection.find_one({'userId': userId})

        if user_cart:
            # Check if the product is already in the cart
            if any(item['productId'] == productId for item in user_cart['products']):
                # Update existing cart with new quantity for the product
                collection.update_one(
                    {'userId': userId, 'products.productId': productId},  # Find by userId and matching productId
                    {'$set': {'products.$.quantity': quantity}}  # Update quantity using $inc and positional operator
                )
                print(f"Product {productId} quantity updated in cart for user {userId}")
                updated_cart = collection.find_one({'userId': userId})
                if updated_cart:
                    print("Product already exists in the cart for user:", userId)
                    return jsonify(updated_cart['products'])
                print("Product already exists in the cart for user:", userId)
                return "Product already exists in the cart."
            
            # Update the existing cart with the new product
            collection.update_one(
                {'userId': userId},
                {'$addToSet': {'products': {'productId' : productId ,'quantity' : quantity}}}
            )
            print("Product added to cart for user:", userId)
        else:
            # Create a new cart for the user and add the product
            cart_data = {
            'userId': userId,
            'products': [{'productId': productId, 'quantity': quantity}]
            }
            collection.insert_one(cart_data)
            print("New cart created and product added for user:", userId)

        # Retrieve and return the updated cart
        updated_cart = collection.find_one({'userId': userId})
        if updated_cart:
            return jsonify(updated_cart['products'])
        else:
            return "Cart is empty."

    except Exception as e:
        print(e)
        return "Failed to add product to cart."
    
@app.route('/api/cart/delete', methods=['POST'])
def remove_from_cart():
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")

        data = request.json
        userId = data.get('userId')
        productId = data.get('productId')
        print(productId , userId)

        db = client['users-e-com']
        collection = db['carts']

        user_cart = collection.find_one({'userId': userId})

        if not user_cart:
            return "User cart not found."
        print("productId",productId)
        if any(item['productId'] == productId for item in user_cart['products']):
            

            collection.update_one(
                {'userId': userId, 'products.productId': productId},
                {'$pull': {'products': {'productId': productId}}}  # Use $pull to remove product
            )

            updated_cart = collection.find_one({'userId': userId})
            if updated_cart:
                return jsonify(updated_cart['products'])
            else:
                return "An error occurred while removing the product."  # More generic error
        return "Product not found in the cart."

    except Exception as e:
        print(e)
        return "Failed to remove product from cart."
    
# Endpoint to retrieve products in the cart for a specific user
@app.route('/api/cart/<userId>', methods=['GET'])
def get_cart(userId):
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")

        # Connect to MongoDB and retrieve the user's cart
        db = client['users-e-com']
        collection = db['carts']

        user_cart = collection.find_one({'userId': userId})

        if user_cart:
            return jsonify(user_cart['products'])
        else:
            return "Cart is empty."

    except Exception as e:
        print(e)
        return "Failed to retrieve cart."

if __name__ == '__main__':
    app.run(debug=True)