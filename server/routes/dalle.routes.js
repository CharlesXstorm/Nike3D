const express = require("express");

const { getResponse, postPrompt } = require("../controllers/dalle.controller");

const router = express.Router();

router.route("/").get(getResponse);
router.route("/").post(postPrompt);

module.exports = router;
