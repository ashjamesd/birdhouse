from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Bird

# connecting to the database
engine = create_engine('sqlite:///./instance/app.db')
Session = sessionmaker(bind=engine)
session = Session()

# Query and select parts of the table
birds = session.query(Bird).all()  # retrieve all records from the bird table
filter_body_color = input("enter bird body color")
for bird in birds:
    bird_object = ['']
    if bird.body_color == filter_body_color:
       
       
       
       
        # bird_obj = Bird(common_name = bird.common_name)
        # bird_object.append(bird_obj)
        # print(bird_object)

        # bird_object.append(bird.common_name)
        # print(bird_object)
        # print(type(bird_object))

    


        # for bird in filter_one:
        #     if bird.neck_color == 'red':
        #         filter_two = bird.common_name
        #         print(filter_two)

