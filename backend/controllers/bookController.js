const Book = require("../models/Book");

// @desc Create a new Book
// @route POST /api/books
// @access PRIVATE
const createBook = async (req, res) => {
  try {
    const { title, author, subtitle, chapters } = req.body;

    if (!title || !author) {
      return res
        .status(400)
        .json({ message: "Please provide the title and the author" });
    }

    const book = await Book.create({
      userId: req.user._id,
      title,
      author,
      subtitle,
      chapters,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get all books for a user
// @route GET /api/books
// @access PRIVATE
const getBooks = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get a single book by ID
// @route GET /api/books/:id
// @access PRIVATE
const getBookById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Update a book
// @route PUT /api/books/:id
// @access PRIVATE
const updateBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Delete a book
// @route DELETE /api/books/:id
// @access PRIVATE
const deleteBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Update book's cover image
// @route PUT /api/books/cover/:id
// @access PRIVATE
const updateBookCover = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  updateBookCover,
};
