const Book = require("../models/Book.model");


const bookGet =  async (req, res) => {

    try {
      const id = req.params.id;
      const selectedBook = await Book.findById(id).populate('author');;
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

const bookPut = async (req, res, next) => {
  try {
      const { _id: id, ...update } = req.body;

      const updatedBook = await Book.findByIdAndUpdate(
          id,
          update,
          { new: true }
      );

      return res.status(200).json(updatedBook);
  } catch (err) {
      // console.log("author update error: ", err);
      return res.status(400).json("The update was not done");
  }
};

const bookDelete = async (req, res, next) => {
  try {
      const id = req.params.id;
      const deletedBook = await Book.findByIdAndDelete(id);
      return res.status(200).json(deletedBook);
  } catch (err) {
      // console.log('author delete error');
      res.status(400).json('The album could not be deleted');
  }
};
module.exports = {
    bookGet,
    bookPost,
    bookPut,
    bookDelete
};