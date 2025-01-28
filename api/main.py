from contextlib import asynccontextmanager
import os

from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
import uvicorn

from dal import (
    Project,
    ProjectDAL,
    Tag,
    TagDAL,
)


MONGODB_URI = os.environ.get('MONGODB_URI')
PROJECT_COLLECTION = 'projects'
TAG_COLLECTION = 'tags'

@asynccontextmanager
async def lifespan(fastapi: FastAPI):
    """Provides clean starting and shutting down of database connection."""
    # Start DB connection:
    client = AsyncIOMotorClient(host=MONGODB_URI)
    db = client.get_default_database()

    # Check if db is available:
    # FIXME: Add logic to failed connections.
    response = await db.command(command='ping')
    if int(response['ok']) != 1:
        raise Exception('Error occurred while connecting to MongoDB!')

    # Add default collection(s):
    projects = db.get_collection(PROJECT_COLLECTION)
    app.project_dal = ProjectDAL(project_collection=projects)

    tags = db.get_collection(TAG_COLLECTION)
    app.tag_dal = TagDAL(tag_collection=tags)

    # Yield back to FastAPI:
    yield

    # On shutdown:
    client.close()


app = FastAPI(lifespan=lifespan, debug=True)


# API Endpoints:
@app.get('/projects')
async def get_all_projects() -> list[Project]:
    """Returns all Projects."""
    tags = await get_all_tags()
    tags = {tag.name: tag for tag in tags}

    projects = [i async for i in app.project_dal.list_projects()]
    for project in projects:
        extended_tags = []
        for tag in project.tags:
            extended_tags.append(tags.get(tag))

        project.tags = extended_tags

    return projects

@app.get('/tags')
async def get_all_tags() -> list[Tag]:
    """Returns all Tags."""
    return [i async for i in app.tag_dal.list_tags()]


# Run server function:
def main():
    """This function should be run by Docker Compose inside API service."""
    try:
        uvicorn.run('main:app', host='0.0.0.0', port=3001, reload=True)
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
