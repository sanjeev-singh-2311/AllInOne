from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from admin.dependencies import get_db
from jobs.crud import get_all_entries, add_new_entry, update_entry
from jobs.schema import Job, JobCreate, JobInfo

jobs_router = APIRouter(tags=["Jobs"])


@jobs_router.get("/")
async def get_all_jobs(db : Session = Depends(get_db)):
    jobs : list[Job] = get_all_entries(db) 

    return jobs

@jobs_router.get("/filters")
async def get_jobs_by_filter():
    pass


@jobs_router.post("/")
async def post_new_job(entry : JobCreate, db : Session = Depends(get_db)):
    # pass
    return add_new_entry(db, entry) 


@jobs_router.put("/{job_id}")
async def update_job_detail(job_id : int, entry : JobInfo, db : Session = Depends(get_db)):
    data : Job = Job(id=job_id, **entry.model_dump())
    update_entry(db, data)


@jobs_router.delete("/{job_id}")
async def delete_job(job_id):
    pass
