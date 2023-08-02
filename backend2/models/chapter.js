const { Schema } = require("mongoose");

const Chapter = new Schema(
  {
    text: { type: Text, required: true },
    chapter_number: { type: Number, required: true },
    book_name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chapter", Chapter);
