const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const LNSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("LN", LNSchema);
