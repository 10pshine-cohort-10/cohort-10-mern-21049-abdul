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

Start each command block from the repository root.

Install backend dependencies, then return to the repository root before
installing frontend dependencies:

```sh
cd backend
npm install
cd ..
cd frontend
npm install
cd ..
```

Create the environment files separately in their respective application
directories. These commands start from the repository root.

For Bash or similar terminals:
```sh
cd backend
cp .env.example .env
cd ..
cd frontend
cp .env.example .env
cd ..
```

For Windows PowerShell:
```powershell
cd backend
Copy-Item .env.example .env
cd ..
cd frontend
Copy-Item .env.example .env
cd ..
```

For Windows Command Prompt (CMD):
```cmd
cd backend
copy .env.example .env
cd ..
cd frontend
copy .env.example .env
cd ..
```

Set `MONGODB_URI` in `backend/.env` to the MongoDB connection string you want
to use. The example uses a local MongoDB instance and contains no credentials.
Do not commit either `.env` file.

## Start the applications

Run each application in a separate terminal. Start both command blocks from
the repository root:

```sh
cd backend
npm run dev
```

```sh
cd frontend
npm run dev
```

Vite serves the frontend at `http://localhost:5173` and proxies `/api` requests
to the backend using `PORT` from `backend/.env` (default `5000`). The API
connects to MongoDB before it starts listening. With the default port, check API
liveness at `http://localhost:5000/api/health` and MongoDB readiness at
`http://localhost:5000/api/health/ready`. The readiness endpoint returns HTTP
503 when MongoDB is disconnected.

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
