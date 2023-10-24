from fastapi import APIRouter, HTTPException
from app.core.models.website_model import WebsiteModel
from app.services.monitor_service import (
    check_website_status,
    get_all_statuses,
    add_website,
    remove_website,
)

router = APIRouter()


@router.post("/add")
async def add(request: WebsiteModel):
    return await add_website(request.url)


@router.delete("/remove")
async def remove(request: WebsiteModel):
    return remove_website(request.url)


@router.get("/statuses")
async def statuses():
    return get_all_statuses()
