
const eventService = require("../services/eventService");
const { logError } = require("../utils/logger");
const wrapAsync = require("../utils/wrapAsync");

const createEvent = wrapAsync(async (req, res, next) => {
  const { title, date, location, description } = req.body;
  const event = await eventService.createEvent(
    req.user.id,
    title,
    date,
    location,
    description
  );
  res.status(201).json(event);
});

const getEvents = wrapAsync(async (req, res, next) => {
  const { filter } = req.query;
  const events = await eventService.getEventsByUser(req.user.id, filter);
  res.json(events);
});


// For legacy public route (can be removed if not needed)
const getEventPublic = wrapAsync(async (req, res, next) => {
  const event = await eventService.getEventById(req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
});

// New public route handler: GET /events/public/:id
const getEventByPublicId = wrapAsync(async (req, res, next) => {
  const event = await eventService.getEventById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  // Only return public fields
  const { title, date, location, description } = event;
  res.json({ title, date, location, description });
});

module.exports = { createEvent, getEvents, getEventPublic, getEventByPublicId };
