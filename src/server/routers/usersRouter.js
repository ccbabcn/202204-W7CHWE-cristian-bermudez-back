const express = require("express");
const loadusers = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.get("/loadusers/", loadusers);

module.exports = usersRouter;
