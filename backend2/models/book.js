const { Schema } = require("mongoose");

const bookSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = bookSchema;
