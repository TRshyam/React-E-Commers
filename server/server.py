from flask import Flask, jsonify,request
from flask_cors import CORS
import json
import pymongo
from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi


# uri = "mongodb+srv://trshyam0007:jVYxhlu3PNxwPrD1@cluster0.cmcdubi.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient('localhost', 27017)



app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/data', methods=['GET'])
def get_data():
    with open('cards.json', 'r') as file:
        data = json.load(file)
  
    return jsonify(data)

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    print(email)
    print(password)
    print("Signing up user...")

    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    # Process the received data (e.g., save it to a database)

    return jsonify({'message': 'User signed up successfully'})

if __name__ == '__main__':
    app.run(debug=True)
