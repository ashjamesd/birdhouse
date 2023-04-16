from app import app
from models import db, User, Bird, Sighting, Location, Season
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
             neck_color = 'red', sex = 'male', size = 24, swim = 'yes'),
        Bird(common_name = 'Common loon', scientific_name = 'Gavia immer', 
             body_color = 'black',  beak_color = 'black', eye_color = 'red',
             neck_color = 'black', sex = 'male', size = 27, swim = 'yes'),
        Bird(common_name = 'American Bittern', scientific_name = 'Botaurus lentiginosus', 
            body_color = 'brown',  beak_color = 'yellow', eye_color = 'yellow',
            neck_color = 'brown', sex = 'female', size = 28, swim = 'no',),
        Bird(common_name = 'Snow Goose', scientific_name = 'Chen caerulescens', 
            body_color = 'white',  beak_color = 'pink', eye_color = 'black',
            neck_color = 'white', sex = 'male', size = 38, swim = 'yes'),
        Bird(common_name = 'Osprey', scientific_name = 'Pandion haliaetus', 
            body_color = 'brown',  beak_color = 'black', eye_color = 'yellow',
            neck_color = 'white', sex = 'male', size = 23, swim = 'yes'),
        Bird(common_name = 'Black-bellied Plover', scientific_name = 'Pluvialis squatarola', 
            body_color = 'brown',  beak_color = 'black', eye_color = 'black',
            neck_color = 'black', sex = 'unknown', size = 11, swim = 'yes'),
        Bird(common_name = 'Mourning Dove', scientific_name = 'Zenaida macroura', 
            body_color = 'gray',  beak_color = 'black', eye_color = 'black', 
            neck_color = 'white', sex = 'male', size = 11, swim = 'no'),
        Bird(common_name = 'Testbird', scientific_name = 'test', 
            body_color = 'brown',  beak_color = 'orange', eye_color = 'black', 
            neck_color = 'black', sex = 'male', size = 11, swim = 'no')
        
    ]

    db.session.add_all(birds)

    print("creating seasons...")
    seasons = [
        Season(name = 'winter_u', name_full = 'winter - uncommon'),
        Season(name = 'winter_c', name_full = 'winter - common'),
        Season(name = 'winter_f', name_full = 'winter - fairly uncommon'),
        Season(name = 'winter_s', name_full = 'winter - scarce'),
        Season(name = 'winter_r', name_full = 'winter - rare'),
        Season(name = 'winter_vr', name_full = 'winter - very rare'),
        
        Season(name = 'spring_u', name_full = 'spring - uncommon'),
        Season(name = 'spring_c', name_full = 'spring - common'),
        Season(name = 'spring_f', name_full = 'spring - fairly uncommon'),
        Season(name = 'spring_s', name_full = 'spring - scarce'),
        Season(name = 'spring_r', name_full = 'spring - rare'),
        Season(name = 'spring_vr', name_full = 'spring - very rare'),
        
        Season(name = 'summer_u', name_full = 'summer - uncommon'),
        Season(name = 'summer_c', name_full = 'summer - common'),
        Season(name = 'summer_f', name_full = 'summer - fairly uncommon'),
        Season(name = 'summer_s', name_full = 'summer - scarce'),
        Season(name = 'summer_r', name_full = 'summer - rare'),
        Season(name = 'summer_vr', name_full = 'summer - very rare'),
        
        Season(name = 'earlyfall_u', name_full = 'earlyfall - uncommon'),
        Season(name = 'earlyfall_c', name_full = 'earlyfall - common'),
        Season(name = 'earlyfall_f', name_full = 'earlyfall - fairly uncommon'),
        Season(name = 'earlyfall_s', name_full = 'earlyfall - scarce'),
        Season(name = 'earlyfall_r', name_full = 'earlyfall - rare'),
        Season(name = 'earlyfall_vr', name_full = 'earlyfall - very rare'),
        
        Season(name = 'latefall_u', name_full = 'latefall - uncommon'),
        Season(name = 'latefall_c', name_full = 'latefall - common'),
        Season(name = 'latefall_f', name_full = 'latefall - fairly uncommon'),
        Season(name = 'latefall_s', name_full = 'latefall - scarce'),
        Season(name = 'latefall_r', name_full = 'latefall - rare'),
        Season(name = 'latefall_vr', name_full = 'latefall - very rare'),

    ]

    db.session.add_all(seasons)



    
    
    
    db.session.commit()

    print('done seeding')




