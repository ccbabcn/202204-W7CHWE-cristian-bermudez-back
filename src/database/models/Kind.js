const { Schema, model } = require("mongoose");

const KindSchema = new Schema({
  kind: String,
});

const Kind = model("Kind", KindSchema, "kinds");

module.exports = Kind;
