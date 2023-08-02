const { Schema } = require("mongoose");

const Book = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", Book);
