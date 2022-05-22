const express = require("express");
const path = require("path");
const multer = require("multer");

const {
  loadUsers,
  userLogin,
  userRegister,
} = require("../controllers/usersController");

const usersRouter = express.Router();

const upload = multer({
  dest: path.join("uploads", "images"),
});

usersRouter.post("/login", userLogin);
usersRouter.post("/register", upload.single("image"), userRegister);
usersRouter.get("/loadusers", loadUsers);

module.exports = usersRouter;
