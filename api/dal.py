from enum import Enum

from pydantic import BaseModel


class TagRoleChoices(str, Enum):
    """Tag role choices. Frontend will need these values to determine 'tag pill' background color."""
    backend = 'backend'
    frontend = 'frontend'
    development = 'development'


class Tag(BaseModel):
    """Tag model. Object example: name: Python, role: backend."""
    name: str
    role: TagRoleChoices

    @staticmethod
    def from_doc(item) -> 'Tag':
        return Tag(
            name=item['name'],
            role=item['role'],
        )
