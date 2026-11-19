# NoteNest

NoteNest is a MERN application scaffold for keeping notes. The project keeps
the React client and Express API in separate applications.

## Technology stack

- Frontend: React and Vite (JavaScript)
- Backend: Node.js and Express
- Database: MongoDB with Mongoose

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- MongoDB running locally, or a MongoDB connection URI

## Installation

Install dependencies in each application:

```sh
cd backend
npm install
cd ../frontend
npm install
```

Create local environment files from the examples:

```sh
cd backend
cp .env.example .env
cd ../frontend
cp .env.example .env
```

On Windows PowerShell, use `Copy-Item .env.example .env` in each application
folder instead of `cp`.

In Windows Command Prompt (CMD), run `copy .env.example .env` separately
while in each application directory: once in `backend`, then again in
`frontend`.

Set `MONGODB_URI` in `backend/.env` to the MongoDB connection string you want
to use. The example uses a local MongoDB instance and contains no credentials.
Do not commit either `.env` file.

## Start the applications

Run each application in a separate terminal:

```sh
cd backend
npm run dev
```

```sh
cd frontend
npm run dev
```

Vite serves the frontend at `http://localhost:5173` and proxies `/api` requests
to the backend at `http://localhost:5000`. The API connects to MongoDB before
it starts listening. Check API liveness at `http://localhost:5000/api/health`
and MongoDB readiness at `http://localhost:5000/api/health/ready`. The readiness
endpoint returns HTTP 503 when MongoDB is disconnected.

## Environment variables

### Backend (`backend/.env`)

| Variable | Purpose | Example |
| --- | --- | --- |
| `PORT` | Port used by the API | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/notenest` |

### Frontend (`frontend/.env`)

| Variable | Purpose | Example |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Optional API base path for frontend API calls; the dev proxy uses `/api` | `/api` |
