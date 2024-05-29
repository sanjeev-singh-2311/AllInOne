from datetime import datetime
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session
from jobs.models import Jobs, TimeSlots
from jobs.schema import Job, JobCreate

def get_all_entries(db : Session):
    job_models : list[Jobs] = db.query(Jobs).all()
    if not job_models: return []

    result = []
    for entries in job_models:
        time_list : list[TimeSlots] = db.query(TimeSlots).where(TimeSlots.job_id == entries.id).all()
        print(time_list)
        result.append(Job(**entries.__dict__, time_slots=[i.time_slot for i in time_list], rating=1, availabe_time_slots=[]))

    return result

def add_new_entry(db : Session, data : JobCreate):
    new_data : Jobs = Jobs(**data.model_dump(exclude={'time_slots'}))

    try:
        db.add(new_data)
        db.commit()
        db.refresh(new_data)

        for time_slots in data.time_slots:
            new_time = TimeSlots(job_id = new_data.id, time_slot = time_slots)
            db.add(new_time)

        db.commit()

        return {'message' : 'Data added sucessfully'}
    except SQLAlchemyError as e:
        print(e)
        return {'message' : 'Couldn\'t add data'}
