const express = require("express");
const relatedUsers = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.get("/related/", relatedUsers);

module.exports = usersRouter;
