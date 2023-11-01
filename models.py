from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP, func
from database import Base


class Customers(Base):
    __tablename__ = "customers"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer)
    name = Column(String(50))
    email = Column(String(100))
    password = Column(String(500))
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    
    
class Drivers(Base):
    __tablename__ = "drivers"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer)
    name = Column(String(50))
    email = Column(String(100))
    password = Column(String(500))
    access_token = Column(String(300), default=None)
    refresh_token = Column(String(300), default=None)
    image = Column(String(100))
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    

class Trips(Base):
    __tablename__ = "trips"
    
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    driver_id = Column(Integer, nullable=True)
    car_name = Column(String(50))
    pick_up_location = Column(String(100))
    location = Column(String(100))
    fare = Column(String(500), nullable=True)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    
    

class Bids(Base):
    __tablename__ = "bids"
    
    id = Column(Integer, primary_key=True, index=True)
    trip_id = Column(Integer)
    driver_id = Column(Integer, nullable=True)
    amount = Column(Integer)
    status = Column(Integer, default=1)
    created_at = Column(TIMESTAMP, default=func.now())
    

