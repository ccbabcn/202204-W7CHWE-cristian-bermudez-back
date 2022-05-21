const express = require("express");
const { loadUsers, userLogin } = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.post("/login", userLogin);
usersRouter.get("/loadusers", loadUsers);

module.exports = usersRouter;
