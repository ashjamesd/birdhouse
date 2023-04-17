from app import app
from models import db, User, Bird, Sighting, Location, Season, BirdSeason
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

with app.app_context():

    print("Deleting data...")
    User.query.delete()
    Bird.query.delete()
    Sighting.query.delete()
    Location.query.delete()

#     print("creating users...")
#     users = [
#         User(username = 'ashjames.d', email = 'ashjames.dean@gmail.com', password = 'password'),
#         User(username = 'cvmk', email = 'chloe@gmail.com', password = 'password')
#     ]

#     db.session.add_all(users)


    print("creating Bird - Season join...")

    birdseasons = [
          BirdSeason(bird_id = 1, season_id = 1),
          BirdSeason(bird_id = 2, season_id = 1),
          BirdSeason(bird_id = 2, season_id = 7),
          BirdSeason(bird_id = 2, season_id = 23),
          BirdSeason(bird_id = 2, season_id = 27),
          BirdSeason(bird_id = 3, season_id = 1),
          BirdSeason(bird_id = 3, season_id = 10),
          BirdSeason(bird_id = 3, season_id = 17),
          BirdSeason(bird_id = 3, season_id = 21),
          BirdSeason(bird_id = 3, season_id = 25),
          BirdSeason(bird_id = 4, season_id = 1),
          BirdSeason(bird_id = 4, season_id = 10),
          BirdSeason(bird_id = 4, season_id = 25),
          BirdSeason(bird_id = 5, season_id = 6),
          BirdSeason(bird_id = 5, season_id = 12),
          BirdSeason(bird_id = 6, season_id = 12),
          BirdSeason(bird_id = 6, season_id = 24),
          BirdSeason(bird_id = 6, season_id = 30),
          BirdSeason(bird_id = 7, season_id = 1),
          BirdSeason(bird_id = 7, season_id = 8),
          BirdSeason(bird_id = 7, season_id = 22),
          BirdSeason(bird_id = 7, season_id = 27),
          BirdSeason(bird_id = 8, season_id = 12),
          BirdSeason(bird_id = 10, season_id = 3),
          BirdSeason(bird_id = 10, season_id = 8),
          BirdSeason(bird_id = 10, season_id = 14),
          BirdSeason(bird_id = 10, season_id = 20),
          BirdSeason(bird_id = 10, season_id = 26),
          BirdSeason(bird_id = 11, season_id = 3),
          BirdSeason(bird_id = 11, season_id = 10),
          BirdSeason(bird_id = 11, season_id = 25)
    ]

    db.session.add_all(birdseasons)


    print("creating birds...")
    birds = [
        Bird(common_name = 'Red-throated loon', scientific_name = 'Gavia stellata', 
             body_color = 'black',  beak_color = 'black', eye_color = 'red',
             neck_color = 'red', sex = 'male', size = 24, swim = 'yes'),
        Bird(common_name = 'Common loon', scientific_name = 'Gavia immer', 
             body_color = 'black',  beak_color = 'black', eye_color = 'red',
             neck_color = 'black', sex = 'male', size = 27, swim = 'yes'),
        Bird(common_name = 'Pied-billed Grebe', scientific_name = 'Podilymbus podiceps', 
              body_color = 'brown', beak_color = 'black', eye_color = 'brown', 
              neck_color = 'white', sex = 'male', size = 13, swim = 'yes'),
        Bird(common_name = 'Horned Grebe', scientific_name = 'Podiceps auritus', 
             body_color = 'black', beak_color = 'black', eye_color = 'red', 
             neck_color = 'black', sex = 'male', size = 13, swim = 'yes'),
        Bird(common_name = 'Red-necked Grebe', scientific_name = 'Podiceps grisegena', 
             body_color = 'black', beak_color = 'black', eye_color = 'red', 
             neck_color = 'red', sex = 'male', size = 27, swim = 'yes'),
        Bird(common_name = 'Eared Grebe', scientific_name = 'Podiceps nigricollis', 
             body_color = 'black', beak_color = 'black', eye_color = 'red', neck_color = 'black', 
             sex = 'male', size = 13, swim = 'yes'),
        Bird(common_name = 'Northern Gannet', scientific_name = 'Morus bassanus', 
             body_color = 'white', beak_color = 'yellow', eye_color = 'blue', 
             neck_color = 'white', sex = 'male', size = 37, swim = 'yes'),
        Bird(common_name = 'American White Pelican', scientific_name = 'Pelecanus erythrorhynchos', 
             body_color = 'white', beak_color = 'orange', eye_color = 'brown', 
             neck_color = 'white', sex = 'male', size = 108, swim = 'yes'),
        Bird(common_name = 'Brown Pelican', scientific_name = 'Pelecanus occidentalis', 
             body_color = 'brown', beak_color = 'gray', eye_color = 'brown', 
             neck_color = 'brown', sex = 'male', size = 137, swim = 'yes'),
        Bird(common_name = 'Double-crested Cormorant', scientific_name = 'Phalacrocorax auritus', 
             body_color = 'black', beak_color = 'black', eye_color = 'blue', 
             neck_color = 'black', sex = 'male', size = 89, swim = 'yes'),
        Bird(common_name = 'Great Cormorant', scientific_name = 'Phalacrocorax carbo', 
             body_color = 'black', beak_color = 'black', eye_color = 'green', 
             neck_color = 'black', sex = 'male', size = 102, swim = 'yes')
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




