from fastapi import FastAPI

app = FastAPI()


@app.get("/projects")
def projects():
    return {"projects": [
        {
            'id': 1
        }
    ]}
