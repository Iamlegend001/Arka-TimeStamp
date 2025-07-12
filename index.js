function getTimeStamp() {
  return new Date().toISOString(); // ✅ Fix: call toISOString() on the Date object
}

function getUnixTimeStamp() {
  return Math.floor(Date.now() / 1000);
}

function formatTime(date = new Date()) {
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

module.exports = {
  getTimeStamp,
  getUnixTimeStamp,
  formatTime
};
