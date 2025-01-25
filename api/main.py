from contextlib import asynccontextmanager
import os

from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
import uvicorn


MONGODB_URI = os.environ.get('MONGODB_URI')

@asynccontextmanager
async def lifespan(fastapi: FastAPI):
    """Provides clean starting and shutting down of database connection."""
    # Start DB connection:
    client = AsyncIOMotorClient(host=MONGODB_URI)
    db = client.get_default_database()

    # Check if db is available:
    response = await db.command(command='ping')
    if int(response['ok']) != 1:
        raise Exception('Error occurred while connecting to MongoDB!')

    # Yield back to FastAPI:
    yield

    # On shutdown:
    client.close()


app = FastAPI(lifespan=lifespan, debug=True)


def main():
    """This function should be run by Docker Compose inside API service."""
    try:
        uvicorn.run('main:app', host='0.0.0.0', port=3001, reload=True)
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
