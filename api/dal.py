from enum import Enum

from pydantic import BaseModel


class TagRoleChoices(str, Enum):
    """Tag role choices. Frontend will need these values to determine 'tag pill' background color."""
    backend = 'backend'
    frontend = 'frontend'
    development = 'development'


class Tag(BaseModel):
    """Tag model. Object example: id: uuid, name: Python, role: backend."""
    id: str
    name: str
    role: TagRoleChoices
