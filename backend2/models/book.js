const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Book = new Schema(
  {
    title: { type: String, required: true },
    storage_title: { type: String },
    author: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", Book);
