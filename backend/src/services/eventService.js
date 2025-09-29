const db = require("../config/db");

function createEvent(userId, title, date, location, description) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO events (userId, title, date, location, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [userId, title, date, location, description], function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, userId, title, date, location, description });
    });
  });
}

function getEventsByUser(userId, filter) {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM events WHERE userId = ?";
    const params = [userId];

    if (filter === "upcoming") {
      query += " AND date >= date('now')";
    } else if (filter === "past") {
      query += " AND date < date('now')";
    }

    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function getEventById(id) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM events WHERE id = ?";
    db.get(query, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

module.exports = { createEvent, getEventsByUser, getEventById };
