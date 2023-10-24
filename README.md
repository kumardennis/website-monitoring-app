# FastAPI & React Project

This project consists of a FastAPI backend and a React frontend.

## Getting Started

### Setting up the Backend

1. Create a Virtual Environment: `python -m venv website-monitor-app`

2. Activate the Virtual Environment:
    - On Windows: `.\website-monitor-app\Scripts\activate`
    - On Linux/Mac: `source website-monitor-app/bin/activate`

3. Install Python Dependencies: `pip install -r requirements.txt`

4. Start the FastAPI Server: `uvicorn main:app --reload`

### Setting up the Frontend

1. Navigate to the React App Directory: `cd client-app`

2. Install React Dependencies: `npm install`

3. Available Scripts: 
    - Start Development Server: `npm start`
    - Build the App: `npm run build`
    - Run Tests: `npm run test`
    - Eject from Create React App: `npm run eject`
    - Open Cypress: `npm run cypress:open`
    - Run Cypress Tests: `npm run cypress:run`

### Using Docker

To start both the backend and frontend using Docker, run: `docker-compose up`