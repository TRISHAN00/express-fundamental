require("dotenv").config("../.env");
const express = require("express");
const middleware = require("./middleware");
const { errorHandler, notFoundHandler } = require("./error");
const router = require("./routes");

const app = express();

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
