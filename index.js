require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const logger = require("./logger/logger");

const connectDatabase = require("./config/database");
const { sourceVerification } = require("./middleware/sourceVerification.middleware");

connectDatabase();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the all poets",
  });
});

app.use("/api/v1", sourceVerification,require("./routes"));

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
