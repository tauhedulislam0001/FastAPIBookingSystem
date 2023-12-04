from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP, func,Text, DateTime
from database import Base
from pydantic import BaseModel, Field, EmailStr
from sqlalchemy.orm import relationship
from sqlalchemy import DateTime

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
    created_at = Column(TIMESTAMP, default=func.now())


class Customers(Base):
    __tablename__ = "customers"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer,default=1)
    name = Column(String(50))
    mobile = Column(String(50))
    email = Column(String(100))
    gender = Column(String(100))
    date_of_birth = Column(DateTime, nullable=True)
    password = Column(String(500), default=None)
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    

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
    mobile = Column(String(50))
    password = Column(String(500), default=None)
    gender = Column(String(100))
    date_of_birth = Column(DateTime, nullable=True)
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    nid_no = Column(String(100))
    nid_image = Column(String(100))
    status = Column(Integer, default=1)
    subscription_status = Column(Integer, default=0)
    subscription_id = Column(Integer, default=None)
    subscription_at = Column(TIMESTAMP, default=None)
    created_at = Column(TIMESTAMP, default=func.now())
    
    
class DrivingLicense(Base):
    __tablename__ = "driving_licenses"

    id = Column(Integer, primary_key=True, autoincrement=True)
    driver_id = Column(Integer, ForeignKey('drivers.id'))
    license_no = Column(String, unique=True)
    exp_date = Column(DateTime)
    experience = Column(DateTime)
    image_front = Column(String)
    image_front_status = Column(Integer, default=0, comment='verified=1, Not verified=0, Rejected=2')
    image_back = Column(String)
    image_back_status = Column(Integer, default=0, comment='verified=1, Not verified=0, Rejected=2')
    verification_status = Column(Integer, default=0, comment='verified=1, Not verified=0, Rejected=2')
    created_by = Column(String)
    updated_by = Column(String, nullable=True)
    verified_by = Column(String, nullable=True)
    created_at = Column(TIMESTAMP, default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())

    driver = relationship('Drivers', backref='driving_licenses')


class Car(Base):
    __tablename__ = "cars"

    id = Column(Integer, primary_key=True, autoincrement=True)
    driver_id = Column(Integer, ForeignKey('drivers.id'))
    car_type = Column(String)
    car_number = Column(String, unique=True)
    ac_status = Column(Integer, comment='1 = AC, 2 = Non-AC')
    transmission_type = Column(Integer, comment='1 = Auto, 2 = Manual')
    car_image = Column(String)
    status = Column(Integer, default=2, comment='0 = Inactive, 1 = Active, 2 = Require approval')
    created_at = Column(TIMESTAMP, default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())

    driver = relationship('Drivers', backref='cars')
    

class CarInformation(Base):
    __tablename__ = "car_information"

    id = Column(Integer, primary_key=True, autoincrement=True)
    driver_id = Column(Integer, ForeignKey('drivers.id'))
    car_number = Column(String, unique=True)
    car_model = Column(String)
    model_year = Column(Integer)
    registration_p_front = Column(String)
    registration_p_back = Column(String)
    car_color = Column(String)
    ac_status = Column(Integer, comment='full-ac=1, semi-ac=2, non-ac=0')
    transmission_type = Column(Integer, comment='auto=1, manual=2')
    fuel_type = Column(Integer, comment='auto=1, manual=2')
    created_by = Column(String)
    updated_by = Column(String, nullable=True)
    verified_by = Column(String, nullable=True)
    created_at = Column(TIMESTAMP, default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())

    driver = relationship('Drivers', backref='car_information')
    

class CarImages(Base):
    __tablename__ = "car_images"

    id = Column(Integer, primary_key=True, autoincrement=True)
    car_info_id = Column(Integer, ForeignKey('car_information.id'))
    front_image = Column(String)
    back_image = Column(String)
    right_side_image = Column(String)
    left_side_image = Column(String)
    inside_front = Column(String)
    inside_back = Column(String)
    created_by = Column(String)
    updated_by = Column(String, nullable=True)
    verified_by = Column(String, nullable=True)
    created_at = Column(TIMESTAMP, default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())

    car_info = relationship('CarInformation', backref='car_images')
    

class Trips(Base):
    __tablename__ = "trips"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("customers.id"))
    driver_id = Column(Integer, ForeignKey('drivers.id'), nullable=True)
    car_name = Column(String(50))
    p_lat = Column(String(50), nullable=True)
    p_long = Column(String(50), nullable=True)
    d_lat = Column(String(50), nullable=True)
    d_long = Column(String(50), nullable=True)
    pick_up_location = Column(String(100))
    location = Column(String(100))
    fare = Column(String(500), nullable=True)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    driver = relationship('Drivers', backref='trips')
    customer = relationship('Customers', backref='trips')
        

class Bids(Base):
    __tablename__ = "bids"
    
    id = Column(Integer, primary_key=True, index=True)
    trip_id =Column(Integer, ForeignKey('trips.id'))
    driver_id = Column(Integer, ForeignKey('drivers.id'))
    amount = Column(Integer)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    driver = relationship('Drivers', backref='bids')
    trip = relationship('Trips', backref='bids')
    

class OTPs(Base):
    __tablename__ = "otps"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    otp = Column(Integer, nullable=False)
    sender_id = Column(String, nullable=False)
    mode = Column(String, nullable=False)
    resend_it = Column(Integer)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, server_default=func.now(), nullable=False)
    updated_at = Column(TIMESTAMP, server_default=func.now(), nullable=False)
    today = Column(Integer, default=0)

