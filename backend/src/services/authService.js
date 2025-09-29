const db = require("../config/db");

function createUser(email, password) {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.run(query, [email, password], function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, email });
    });
  });
}

function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.get(query, [email], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

module.exports = { createUser, findUserByEmail };
