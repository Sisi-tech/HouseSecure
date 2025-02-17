require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
// const favicon = require("express-favicon");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");

// Middleware imports 
const notFoundMiddleware = require("./middleware/not_found");
const errorHandleMiddleware = require("./middleware/error_handler");
const userRouter = require("./routes/userRoutes");
const historyRouter = require("./routes/historyRoutes");
const locationRouter = require("./routes/locationRoutes");
const applicantInfoRouter = require("./routes/applicantInfoRoutes");

app.use(express.static("public"));
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// middleware
app.use(helmet());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongoSanitize());
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));


app.set("trust proxy", 1);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/history", historyRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/applicant-info", applicantInfoRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);


module.exports = app;