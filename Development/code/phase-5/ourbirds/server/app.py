from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/data', methods=["GET"])
def get_data():
    data = {
        'user':"ashjames.d",
        'time':"8:12am",
        'location': "Brooklyn"
    }

    print(data)

    response = make_response(
        jsonify(data),
        200
    )

    return response


if __name__ == '__main__':
    app.run(debug=True)