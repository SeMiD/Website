const activity = require("./routes/activity");
const express = require("express");
const app = express();

app.use(activity);

module.exports = {
  path: "/api",
  handler: app
};
