from admin.config import DATABASE_URL
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
# from sqlalchemy_utils import database_exists, create_database

engine = create_engine(DATABASE_URL)

Base = declarative_base()

SessionMaker = sessionmaker(bind=engine, autoflush=False, autocommit=False)
