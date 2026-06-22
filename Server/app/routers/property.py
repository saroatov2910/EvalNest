from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.property import Property
from app.schemas.property import PropertyCreate, PropertyResponse
router = APIRouter(prefix="/properties", tags=["properties"])
@router.post("/", response_model=PropertyResponse)
def create_property(property: PropertyCreate, db: Session = Depends(get_db)):
    db_property = Property(**property.model_dump(), user_id="temp-user")
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    return db_property
@router.get("/{property_id}", response_model=PropertyResponse)
def read_property(property_id: int, db: Session = Depends(get_db)):
    db_property = db.query(Property).filter(Property.id == property_id).first()
    if db_property is None:
        raise HTTPException(status_code=404, detail="Property not found")
    return db_property

