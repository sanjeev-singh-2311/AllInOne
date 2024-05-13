from sqlalchemy.orm import Session
from admin.database import SessionMaker

def get_db():
    session : Session = SessionMaker()
    try:
        yield session
    finally:
        session.close()
