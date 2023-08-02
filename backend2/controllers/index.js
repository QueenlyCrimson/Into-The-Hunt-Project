// Schemas

const Book = require("../models/book");
const Chapter = require("../models/chapter");

// Controllers

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body);
    await book.save();
    return res.status(201).josn({
      book,
    });
  } catch (error) {
    return res.status(500).josn({ error: error.message });
  }
};

module.exports = {
  createBook,
};
