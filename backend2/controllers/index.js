// Schemas

const Book = require("../models/book");
const Chapter = require("../models/chapter");

// Controllers

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body);
    await book.save();
    return res.status(201).json({
      book,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ books });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getBookByName = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json({ book });
    }
    return res.status(404).send("Book with the specified name does not exist!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Book deleted");
    }
    throw new Error("Book not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createChapter = async (req, res) => {
  try {
    const chapter = await new Chapter(req.body);
    await chapter.save();
    return res.status(201).json({
      chapter,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getChapterByBook = async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await Chapter.findById(id);
    if (chapter) {
      return res.status(200).json({ chapter });
    }
    return res
      .status(404)
      .send("Chapter with the specified name does not exist!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllChaptersByBook = async (req, res) => {
  try {
    const { id } = req.params;
    const chapters = await Chapter.find({
      book_name: id,
    });
    if (chapters) {
      return res.status(200).json({ chapters });
    }
    return res
      .status(404)
      .send("Chapter with the specified name does not exist!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getChaptersByBook = async (req, res) => {
  try {
    const { id, chapNum } = req.params;

    const chapter = await Chapter.find({
      book_name: id,
      chapter_number: chapNum,
    });
    if (chapter) {
      return res.status(200).json({ chapter });
    }
    return res
      .status(404)
      .send("Chapter with the specified name does not exist!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(chapter);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteChapter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Chapter.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Book deleted");
    }
    throw new Error("Chapter not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByName,
  updateBook,
  deleteBook,
  createChapter,
  getChapterByBook,
  updateChapter,
  deleteChapter,
  getChaptersByBook,
  getAllChaptersByBook,
};
