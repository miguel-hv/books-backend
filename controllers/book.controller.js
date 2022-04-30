const Book = require("../models/Book.model");


const bookGet =  async (req, res) => {

    try {
      const id = req.params.id;
      const selectedBook = await Book.findById(id);
      return res.status(200).json(selectedBook);
  
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
};

const bookPost = async (req, res, next) => {
  try {

      const newBook = new Book({
          name: req.body.name,
          isbn: req.body.isbn,
          author: req.body.author,      
      });
      const createdBook = await newBook.save();
      return res.status(200).json(createdBook);
  } catch (err) {
      console.log(err);
      return res.status(400).json("The body of the request is not valid");
      // error.status = 400;
      // return next(error);
  }
};

module.exports = {
    bookGet,
    bookPost,
};