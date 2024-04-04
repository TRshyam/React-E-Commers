from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/api/data', methods=['GET'])
def get_data():
    with open('cards.json', 'r') as file:
        data = json.load(file)
  
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
