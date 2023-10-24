from pydantic import BaseModel


class WebsiteModel(BaseModel):
    url: str
