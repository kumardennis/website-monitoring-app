import time
import httpx
from app.db.state_manager import StateManager


async def check_website_status(url: str) -> str:
    try:
        async with httpx.AsyncClient() as client:
            start_time = time.time()
            response = await client.get(url, timeout=1)
            elapsed_time = time.time() - start_time

            response = await client.get(url, timeout=1)
            if elapsed_time > 0.250:  # >250ms
                return "slow"
            elif 200 <= response.status_code < 300:
                return "ok"
            else:
                return "error"
    except (httpx.RequestTimeout, httpx.TooManyRedirects, httpx.HTTPStatusError):
        return "error"


def get_all_statuses():
    state_manager = StateManager()
    return state_manager.get_all()


async def add_website(url: str) -> str:
    status = await check_website_status(url)
    state_manager = StateManager()
    state_manager.add_website(url, status)
    return {"url": url, "status": status}


def remove_website(url: str) -> str:
    state_manager = StateManager()
    state_manager.remove_website(url)
    return {"message": "Removed", "url": url}
