from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from admin.database import Base, engine

class Jobs(Base):

    __tablename__ = "Jobs"

    id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    name = Column(String)
    experience = Column(String)
    expertise = Column(String)

    cost_lower = Column(Float)
    cost_upper = Column(Float)

    # time_slots = Column(DateTime)
    # TODO -> fill the rest

class TimeSlots(Base):

    __tablename__ = "TimeSlots"

    slot_id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    job_id = Column(Integer, ForeignKey('Jobs.id'))
    time_slot = Column(DateTime)

Base.metadata.create_all(bind=engine)
