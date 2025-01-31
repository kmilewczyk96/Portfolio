from enum import Enum

from motor.motor_asyncio import AsyncIOMotorCollection
from pydantic import BaseModel


# Pydantic models:
class Message(BaseModel):
    """Message model."""
    name: str
    email: str
    company: str | None
    message: str

    @staticmethod
    def from_doc(item) -> 'Message':
        return Message(
            name = item['name'],
            email = item['email'],
            company = item['company'],
            message = item['message'],
        )

class TagRoleChoices(str, Enum):
    """Tag role choices. Frontend will need these values to determine 'tag pill' background color."""
    backend = 'backend'
    frontend = 'frontend'
    development = 'development'


class Tag(BaseModel):
    """Tag model."""
    name: str
    role: TagRoleChoices

    @staticmethod
    def from_doc(item) -> 'Tag':
        return Tag(
            name=item['name'],
            role=item['role'],
        )


class Project(BaseModel):
    """Project model."""
    id: str
    name: str
    photoURI: str
    tags: list[str] | list[Tag]
    description: str
    source_code: str

    @staticmethod
    def from_doc(item) -> 'Project':
        return Project(
            id=str(item['_id']),
            name=item['name'],
            photoURI=item['photoURI'],
            tags=item['tags'],
            description=item['description'],
            source_code=item['source_code'],
        )


# Data Access Layers:
class MessageDAL:
    """Handles communication between Application and Mongo Database."""
    def __init__(self, message_collection: AsyncIOMotorCollection):
        self._message_collection = message_collection

    async def create_message(self, message: Message, session=None) -> str:
        res = await self._message_collection.insert_one(
            {
                'name': message.name,
                'email': message.email,
                'company': message.company,
                'message': message.message,
            },
            session=session
        )

        return str(res.inserted_id)


class TagDAL:
    """Handles communication between Application and Mongo Database."""
    def __init__(self, tag_collection: AsyncIOMotorCollection):
        self._tag_collection = tag_collection

    async def list_tags(self, session=None):
        """Yields Tag object from collection."""
        async for doc in self._tag_collection.find(
            {},
            sort={'name': 1},
            session=session,
        ):
            yield Tag.from_doc(doc)


class ProjectDAL:
    """Handles communication between Application and Mongo Database."""
    def __init__(self, project_collection: AsyncIOMotorCollection):
        self._project_collection = project_collection

    async def list_projects(self, session=None):
        """Yields Project object from collection."""
        async for doc in self._project_collection.find(
            {},
            sort={'name': 1},
            session=session
        ):
            yield Project.from_doc(doc)
