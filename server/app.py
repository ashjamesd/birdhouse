from flask import Flask, make_response, request, jsonify, abort, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Bird, Sighting, Location

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

app.config['SESSION_TYPE'] = 'sqlalchemy'
app.config['SESSION_SQLALCHEMY_TABLE'] = 'sessions'
app.config ['SESSION_SQLALCHEMY'] = db

migrate = Migrate(app, db)

db.init_app(app)
# db.create_all()

server_session = Session(app)

api = Api(app)


#getting the initial bird log
@app.route('/log', methods=["GET"])
def get_log():
    loggie = {
        'user':"ashjames.d",
        'time':"8:12am",
        'location': "Brooklyn"
    }

    print(loggie)

    response = make_response(
        jsonify(loggie),
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

        print("hello")
        print(sightings)

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


#deleting individual user logs 
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

@app.route('/userlog/<int:id>', methods=['PATCH'])
def patch_log(id):
    data = request.get_json()
    print(data["notes"])
    edit_bird = Sighting.query.filter(Sighting.sighting_id == id).first()
    edit_bird.notes = data["notes"]
    db.session.commit

    if edit_bird:
        return data

    else:
        return jsonify({"no":"no"})


# @app.route("/users", methods = ["POST"])
# def register_user():
#     email = request.json['email']
#     password = request.json['password']

#     user_exists = User.query.filter_by(email = email).first() is not None
    
#     if user_exists:
#         abort(409)
    
#     else:
#         hashed_password = Bcrypt.generate_password_hash(password)
#         new_user = User(email = email, password = hashed_password)
        
#         db.session.add(new_user)
#         db.session.commit()

#         return jsonify({
#             'id': new_user.id,
#             'email': new_user.email
#         })

@app.route("/users", methods = ["POST"])
def register_user():
    register = request.get_json()

    email = User.query.filter_by(email = register['email']).first()

    password = User.query.filter_by(password = register['password']).first()

    if email or password:
        print('invalid')

        response = make_response(
            jsonify({"error":"user already exists"}),409
        )
    
    else:
        new_user = User(
            email = register.get('email'),
            password = register.get('password'),
            username = register.get('username')
        )

        db.session.add(new_user)
        db.session.commit()

        response = make_response(
            jsonify(register),
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

# @app.route('/users', methods = ["POST"])
# def post_users():
#     email = request.json["email"]
#     password = request.json.get('password')
#     user = User.query.filter_by(email=email, password=password).first() is not None
#     print (user)
#     if user:
#         response = {
#             'message':'Login Successful',
#             'status_code': 200
#         }
#     else:
#         response = {
#             'message':'Invalid username or password',
#             'status_code': 401
#         }
#     return jsonify(response)

@app.route('/login', methods = ["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    # print(user)

    if user is None:
        return jsonify({"error":"unauthorized"})
    
    elif user.email != email:
        return jsonify({"error":"email does not exist"})
    
    elif user.password != password:
        return jsonify({"error":"password does not exist"})
    
    else:
        session['user_id'] = user.user_id
        db.session.commit()

        # new_session = Session(session_id = session.sid, user_id = user.user_id, data = session.items())
        # server_session.add(new_session)
        # server_session.commit()

        return jsonify({
            "id": user.user_id,
            "email": user.email
        })
    
@app.route('/getsession', methods = ["GET"])
def get_session():
    return f'The session id is: {session.get("user_id")}'

@app.route('/checksession', methods=["GET"])
def check_session():
    user=User.query.filter(User.user_id == session.get('user_id')).first()
    print(user)
    if user:
        return user.to_dict()
    else: 
        return {'message':'401: Not Authorized'}, 401

@app.route('/logout', methods=["DELETE"])
def logout():
    session['user_id'] = None
    # return{'message':'204:No Content'}, 204



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