from datetime import datetime
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session, joinedload
from jobs.models import Jobs, TimeSlots, JobLocations
from jobs.schema import Job, JobCreate

def get_all_entries(db : Session):
    result : list[Job] = []

    try:
        job_models : list[Jobs] = db.query(Jobs).options(
            joinedload(Jobs.time_slots),
            joinedload(Jobs.job_location)
        ).all()
    except SQLAlchemyError as e:
        print(e)
        return result
    if not job_models: return result

    for entry in job_models:
        time_slot_filter = [ts.time_slot for ts in entry.time_slots]
        location_filter = [j.location for j in entry.job_location]
        a_time_slot : list[datetime] = [ts.time_slot for ts in entry.time_slots if ts.availability]

        del entry.time_slots
        del entry.job_location


        result.append(
                Job(**entry.__dict__, time_slots=time_slot_filter, job_location=location_filter , availabe_time_slots=a_time_slot)
        )

    return result

def add_new_entry(db : Session, data : JobCreate):
    new_data : Jobs = Jobs(**data.model_dump(exclude={'time_slots', 'job_location'}))

    try:
        db.add(new_data)
        db.commit()
        db.refresh(new_data)

        for time_slots in data.time_slots:
            new_time = TimeSlots(job_id = new_data.id, time_slot = time_slots)
            db.add(new_time)
        for location in data.job_location:
            new_location = JobLocations(job_id = new_data.id, location = location)
            db.add(new_location)

        db.commit()

        return {'message' : 'Data added sucessfully'}
    except SQLAlchemyError as e:
        db.rollback()
        print(e)
        return {'message' : 'Couldn\'t add data'}
