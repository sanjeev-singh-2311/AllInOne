from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from admin.database import Base, engine

class Jobs(Base):

    __tablename__ = "Jobs"

    id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    name = Column(String)
    experience = Column(String)
    expertise = Column(String)
    rating = Column(Float)

    cost_lower = Column(Float)
    cost_upper = Column(Float)

    time_slots = relationship("TimeSlots", back_populates="job")
    job_location = relationship("JobLocations", back_populates="job")

    # TODO -> fill the rest

class TimeSlots(Base):

    __tablename__ = "TimeSlots"

    slot_id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    job_id = Column(Integer, ForeignKey('Jobs.id'))
    time_slot = Column(DateTime)

    availability = Column(Boolean, default=True)

    job = relationship("Jobs", back_populates="time_slots")

class JobLocations(Base):
    __tablename__ = "JobLocations"

    location_id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    job_id = Column(Integer, ForeignKey('Jobs.id'))
    location = Column(String)
    job = relationship("Jobs", back_populates="job_location")

Base.metadata.create_all(bind=engine)
