from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, nullable=False)
    city = Column(String, nullable=False)
    neighborhood = Column(String, nullable=False)
    size_sqm = Column(Float, nullable=False)
    rooms = Column(Float, nullable=False)
    floor = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
