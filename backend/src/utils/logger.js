function logInfo(message, data) {
  if (data !== undefined) {
    console.log(`[INFO] ${message}`, data);
  } else {
    console.log(`[INFO] ${message}`);
  }
}

function logError(message, error) {
  if (error && error.stack) {
    console.error(`[ERROR] ${message}`, error.stack);
  } else if (error) {
    console.error(`[ERROR] ${message}`, error);
  } else {
    console.error(`[ERROR] ${message}`);
  }
}

module.exports = { logInfo, logError };
