from pydantic import BaseModel
class PropertyCreate(BaseModel):
    city: str
    neighborhood: str
    size_sqm: float
    rooms: float
    floor: int

class PropertyResponse(BaseModel):
    id: int
    city: str
    neighborhood: str
    size_sqm: float
    rooms: float
    floor: int

    class Config:
        from_attributes = True