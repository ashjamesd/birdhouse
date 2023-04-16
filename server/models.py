from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Sighting(db.Model, SerializerMixin):
    __tablename__ = 'sightings'

    sighting_id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    image = db.Column(db.String)
    notes = db.Column(db.String)

    location_id = db.Column(db.Integer, db.ForeignKey('locations.location_id'))
    bird_id = db.Column(db.Integer, db.ForeignKey('birds.bird_id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))

    @validates('notes')
    def validates_notes(self,key,notes):
        if len(notes) < 1:
            raise ValueError("Please include notes")
        return notes

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)

class Bird(db.Model, SerializerMixin):
    __tablename__ = 'birds'
    
    bird_id = db.Column(db.Integer, primary_key = True)
    common_name = db.Column(db.String)
    scientific_name = db.Column(db.String)
    body_color = db.Column(db.String)
    beak_color = db.Column(db.String)
    eye_color = db.Column(db.String)
    neck_color = db.Column(db.String)
    sex = db.Column(db.String)
    size = db.Column(db.Integer)
    swim = db.Column(db.String)
    season = db.Column(db.String)

class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    location_id = db.Column(db.Integer, primary_key = True)
    neighborhood = db.Column(db.String)
    park_name = db.Column(db.String)

class Season(db.Model, SerializerMixin):
    __tablename__ = 'seasons'

    season_id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    name_full = db.Column(db.String)

class BirdSeason(db.Model, SerializerMixin):
    __tablename__ = "birdseason"

    birdseason_id = db.Column(db.Integer, primary_key = True)
    bird_id = db.Column(db.Integer, db.ForeignKey('birds.bird_id'))
    season_id = db.Column(db.Integer, db.ForeignKey('seasons.season_id'))