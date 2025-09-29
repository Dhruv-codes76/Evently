
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/events", eventRoutes);

// Central error handler
app.use(errorHandler);

module.exports = app;
app.get('/health', (req, res) => {
	res.json({ message: '✅ Evently backend is running' });
});

// Mount routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

module.exports = app;
