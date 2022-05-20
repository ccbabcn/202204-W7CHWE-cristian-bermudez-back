const express = require("express");
const listKinds = require("../controllers/kindsController");

const kindsRouter = express.Router();

kindsRouter.get("/list/", listKinds);

module.exports = kindsRouter;
