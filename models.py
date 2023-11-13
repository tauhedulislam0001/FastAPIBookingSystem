from sqlalchemy import Boolean, Column, Text, ForeignKey, Integer, String, TIMESTAMP, func
from database import Base
from pydantic import BaseModel, Field, EmailStr
from sqlalchemy.orm import relationship


class Admins(Base):
    __tablename__ = "admins"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer,default=3)
    full_name = Column(String(50))
    username = Column(String(50))
    email = Column(String(100))
    password = Column(String(500))
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    can_login = Column(Integer, default=1)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())


class Customers(Base):
    __tablename__ = "customers"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer,default=1)
    name = Column(String(50))
    email = Column(String(100))
    password = Column(String(500))
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    

class DriverSubscriptions(Base):
    __tablename__ = "driver_subscriptions"
    
    
    id = Column(Integer, primary_key=True, index=True)
    package_name = Column(String)
    package_description = Column(Text)
    package_duration = Column(Integer)
    amount = Column(Integer)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    
    
class Drivers(Base):
    __tablename__ = "drivers"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer,default=2)
    name = Column(String(50))
    email = Column(String(100))
    password = Column(String(500))
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    subscription_status = Column(Integer, default=0)
    

class Trips(Base):
    __tablename__ = "trips"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    driver_id = Column(Integer, ForeignKey('drivers.id'), nullable=True)
    car_name = Column(String(50))
    pick_up_location = Column(String(100))
    location = Column(String(100))
    fare = Column(String(500), nullable=True)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    driver = relationship('Drivers', backref='trips')
    

class Bids(Base):
    __tablename__ = "bids"
    
    id = Column(Integer, primary_key=True, index=True)
    trip_id =Column(Integer, ForeignKey('trips.id'))
    driver_id = Column(Integer, ForeignKey('drivers.id'))
    amount = Column(Integer)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    driver = relationship('Drivers', backref='bids')
    trip = relationship('Trips', backref='bids')

