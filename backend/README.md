# Event Tracker

A full-stack event tracking application with a Node.js/Express backend (SQLite, JWT, robust validation, centralized error handling) and a modern React/Tailwind CSS frontend. Built for professional, production-ready use.

---

## Features

- **User Authentication**: JWT-based signup, login, and protected routes
- **Event Management**: Create, update, delete, and view events
- **Public Event Sharing**: Shareable public event links
- **Validation**: Joi-based request validation for all endpoints
- **Centralized Error Handling**: Custom error class, async error wrapper, and global error middleware
- **Logging**: Custom logger for info and error logs
- **Environment Config**: `.env` support for secrets and config
- **Frontend**: Responsive React UI with Tailwind CSS, React Router, and Context API

---

## Tech Stack

**Backend:**
- Node.js, Express.js
- SQLite (with `sqlite3`)
- JWT (jsonwebtoken)
- Bcrypt (password hashing)
- Joi (validation)
- Winston or custom logger

**Frontend:**
- React
- Tailwind CSS
- React Router
- Context API

---

## Project Structure

```
backend/
  index.js
  package.json
  .env.example
  src/
    app.js
    config/
      db.js
    controllers/
      authController.js
      eventController.js
    middleware/
      authMiddleware.js
    routes/
      auth.js
      events.js
    services/
      authService.js
      eventService.js
    utils/
      token.js
      validators.js
      logger.js
      expressError.js
      wrapAsync.js
```

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

Create a `.env` file in `backend/`:
```
PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=./evently.db
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

## License
MIT
