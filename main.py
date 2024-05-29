from fastapi import FastAPI
from jobs.routes import jobs_router

app = FastAPI()

app.include_router(jobs_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8800)
    
