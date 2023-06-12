const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const dallE = require("./routes/dalle.routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dallE);

module.exports = app;
