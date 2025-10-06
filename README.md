# Event Tracker

A full-stack event tracking application with a Node.js/Express backend (SQLite, JWT, robust validation, centralized error handling) and a modern React/Tailwind CSS frontend. Built for professional, production-ready use.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Best Practices & Architecture](#best-practices--architecture)
- [Trade-offs & Notes](#trade-offs--notes)
- [License](#license)

---

## Features
- **User Authentication**: JWT-based signup, login, and protected routes
- **Event Management**: Create and view your own events

---

## What You Can Do
- Sign up and log in with email and password
- Create new events (title, date & time, location, optional description)
- View a list of your events
- Filter your events by upcoming or past
- Share a public link to an event (view-only, no login required)

---

## Tech Stack

**Backend:**
- Node.js, Express.js
- SQLite (with `sqlite3`)
- JWT (jsonwebtoken)
- Bcrypt (password hashing)
- Joi (validation)

**Frontend:**
- React
- Tailwind CSS
- React Router
- Context API

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Backend Setup
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and fill in secrets
4. `npm run dev` (uses nodemon)

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm start` (or `npm run dev` if using Vite)

---

## Environment Variables

### Backend

Create a `.env` file in `backend/`:
```
PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=./evently.db
```

### Frontend

Create a `.env` file in `frontend/`:
```
VITE_API_URL=your_backend_url_here
```

---

## Best Practices & Architecture
- **Validation**: All routes use Joi schemas for input validation.
- **Error Handling**: Centralized with custom `ExpressError` and `wrapAsync` for async routes.
- **Logging**: All errors and important actions are logged.
- **Security**: Passwords hashed with bcrypt, JWT for authentication, secrets in `.env`.
- **Modular Structure**: Separation of concerns (controllers, services, middleware, utils).
- **.gitignore**: Ignores node_modules, .env, database, logs, and system files.

---

## Trade-offs & Notes
- SQLite is used for simplicity; swap for Postgres/MySQL in production.
- No email verification or OAuth (can be added).
- Public event sharing is link-based (no search/index).

---
