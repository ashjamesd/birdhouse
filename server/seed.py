from app import app
from models import db, User, Bird, Sighting, Location
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

with app.app_context():

    print("Deleting data...")
    User.query.delete()
    Bird.query.delete()
    Sighting.query.delete()
    Location.query.delete()

    print("creating users...")
    users = [
        User(username = 'ashjames.d', email = 'ashjames.dean@gmail.com', password = 'password'),
        User(username = 'cvmk', email = 'chloe@gmail.com', password = 'password')
    ]

    db.session.add_all(users)

    print("creating birds...")
    birds = [
        Bird(common_name = 'Red-throated loon', scientific_name = 'Gavia stellata', 
             body_color = 'black',  beak_color = 'black', eye_color = 'red',
             neck_color = 'red', sex = 'male', size = 24, swim = 'yes', season = 'winter_u'),
        Bird(common_name = 'Common loon', scientific_name = 'Gavia immer', 
             body_color = 'black',  beak_color = 'black', eye_color = 'red',
             neck_color = 'black', sex = 'male', size = 27, swim = 'yes', 
             season = 'winter_u')
    ]
    # birds = [
    #     Bird(common_name = 'Red-throated loon', scientific_name = 'Gavia stellata', 
    #          body_color = ['black', 'gray', 'white'],  beak_color = 'black', eye_color = 'red',
    #          neck_color = 'red', sex = 'male', size = 24, swim = 'yes', season = 'winter_u'),
    #     Bird(common_name = 'Common loon', scientific_name = 'Gavia immer', 
    #          body_color = ['black','white'],  beak_color = ['black','white'], eye_color = 'red',
    #          neck_color = ['black','white'], sex = 'male', size = 27, swim = 'yes', 
    #          season = ['winter_u', 'spring_u','earlyfall_r', 'latefall_f'])
    # ]

    db.session.add_all(birds)

    db.session.commit()

    print('done seeding')




