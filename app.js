const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const passportRouter = require("./routes/passportRoutes.js");

const app = express();

const configurePassport = require("./configurePassport.js");

configurePassport(app);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "front/build")));
//app.use(express.static(path.join(__dirname, "public")));
/*
app.use("/", indexRouter);
app.use("/", passportRouter);
*/
app.use("/", indexRouter);
app.use("/passport", passportRouter);
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "front/build") });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  next(err);
});

module.exports = app;
