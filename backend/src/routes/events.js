const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");
const { validateEvent } = require("../middleware/validateRequest");

router.post("/", authMiddleware, validateEvent, eventController.createEvent);
router.get("/", authMiddleware, eventController.getEvents);


router.get("/:id", eventController.getEventByPublicId);
router.get("/public/:id", eventController.getEventByPublicId);

module.exports = router;
