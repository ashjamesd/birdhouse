from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, User, Bird, Sighting, Location

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)


#getting the initial bird log
@app.route('/log', methods=["GET"])
def get_log():
    log = {
        'user':"ashjames.d",
        'time':"8:12am",
        'location': "Brooklyn"
    }

    # print(log)

    response = make_response(
        jsonify(log),
        200
    )

    return response

#getting the entire log 
@app.route('/userlog',methods=["GET"])
def get_user_log():
    sightings = []
    for sighting in Sighting.query.all():
        sighting_dict = sighting.to_dict()
        sightings.append(sighting_dict)

        response = make_response(
        sightings,
        200
        )

        return response

#posting new bird log from the log
@app.route('/userlog',methods=["POST"])
def log_bird():
    log = request.get_json()
    

    user = User.query.filter_by(username = log['user']).first()

    bird = Bird.query.filter_by(common_name = log['name']).first()

    print(user.email)
    print(bird.scientific_name)

    if user and bird:
        new_sighting = Sighting(
            user_id = user.user_id,
            bird_id = bird.bird_id,
            notes = log.get('notes'),
            image = log.get('image')
        )


        db.session.add(new_sighting)
        db.session.commit()

        response = make_response(
        jsonify(log),
        200
        )

    return response


#getting individual user logs 
@app.route('/userlog/<int:id>', methods=['DELETE'])
def delete_user_log_by_id(id):
    user_sighting_del = Sighting.query.filter(Sighting.sighting_id == id).first()
    db.session.delete(user_sighting_del)
    db.session.commit()

    response_body = {
        "delete_succesful": True,
        "message": "log deleted."
    }

    response = make_response(
        response_body,
        200
    )

    return response

@app.route('/userlog/<int:id>', methods=['GET'])
def get_user_log_by_id(id):
    user_sighting = Sighting.query.filter(Sighting.sighting_id == id).first()

    user_sighting_dict = user_sighting.to_dict()

    response = make_response(
        user_sighting_dict,
        200
    )

    return response


#getting hard-coded users
@app.route('/users', methods=["GET"])
def get_users():
    users = User.query.all()
    users_dict = [user.to_dict() for user in users]

    response = make_response(
        jsonify(users_dict),
        200
    )

    return response

#hard-coded birds
@app.route('/birds', methods=["GET"])
def get_birds():
    birds = Bird.query.all()
    birds_dict = [bird.to_dict() for bird in birds]

    response = make_response(
        jsonify(birds_dict),
        200
    )

    return response

#individual hard-coded birds
@app.route('/birds/<int:id>', methods = ['GET'])
def get_bird_by_ID(id):
    bird = Bird.query.filter(Bird.bird_id == id).first()
    
    bird_dict = bird.to_dict()
    
    response = make_response(
    bird_dict,
    200
    )

    return response

if __name__ == '__main__':
    app.run(debug=True)