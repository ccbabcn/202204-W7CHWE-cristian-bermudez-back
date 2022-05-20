const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  friends: {
    type: [{ type: Schema.Types.ObjectId, unique: true }],
    ref: "User",
    default: [],
  },
  enemies: {
    type: [{ type: Schema.Types.ObjectId, unique: true }],
    ref: "User",
    default: [],
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;
