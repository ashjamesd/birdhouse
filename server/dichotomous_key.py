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
filter_birds_one = []
for bird in birds:
    if bird.body_color == filter_body_color:

        filter_birds_one.append(bird)

print(filter_birds_one)


if len(filter_birds_one) > 1:
    filter_neck_color = input("input neck color")
    # filter_birds_two = []

    for bird in filter_birds_one:
        if bird.neck_color != filter_neck_color:

            filter_birds_one.remove(bird)
    print(filter_birds_one)
    
else:

    print(filter_birds_one[0].common_name)

if len(filter_birds_one) > 1:
    print(filter_birds_one)
    filter_eye_color = input("input eye color:")
    # filter_birds_three = []

    for bird in filter_birds_one:
        if bird.eye_color != filter_eye_color:

            filter_birds_one.remove(bird)
            print(filter_birds_one)
    # print(filter_birds_one)

else:
    print(filter_birds_one[0].common_name)
       
       
       
       
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

