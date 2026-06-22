from pydantic import BaseModel
class EvaluationCreate(BaseModel):
    property_id: int

class EvaluationResponse(BaseModel):
    id: int
    property_id: int
    estimated_price: float

    class Config:
        from_attributes = True