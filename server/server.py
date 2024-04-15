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

@app.route('/api/data', methods=['GET'])
def get_data():
    with open('server\cards.json', 'r') as file:
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
    email = data.get('email')
    password = data.get('password')
    print(email)
    print(password)
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
            'email': email,
            'password': hashpw(password.encode('utf-8'), gensalt()),
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
    
    if user is not None:
        try:
            if checkpw(password.encode('utf-8'), user['password']) :
                print("true Passwrd")
                print("true Passwrd")
                return "True"
            else:
                return "False"
        except Exception as error:
            return str(error)
    
    else:
        return "False"



    # user = mongo.db.users.find_one({'username': username})


if __name__ == '__main__':
    app.run(debug=True)
