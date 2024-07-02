from datetime import datetime
from typing import List
from pydantic import BaseModel, Field


class JobCreate(BaseModel):

    name: str = Field(description="Name of the worker")
    experience: str = Field(description="Experience -> 1Y, 3Y, 10Y+ etc")
    expertise: str = Field(description="The type of job expertise ")

    cost_lower: float = Field(description="The lower limit of charges", gt=0)
    cost_upper: float = Field(description="The upper limit of charges", gt=0)

    time_slots: List[datetime] = Field(
        description="All the Time slots with date and time"
    )


class JobInfo(JobCreate):
    rating: float = Field(description="Rating out of 5", gt=0.0, lt=5.0)

    availabe_time_slots: List[datetime] = Field(
        description="Available Time slots with date and time"
    )
    locations: List[str] = Field(
        description="Locations where the jobs are available"
    )


class Job(JobInfo):
    id: int = Field(description="Job ID for unique identification, AUTO assigned")
