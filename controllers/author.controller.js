const Author = require("../models/Author.model");

const authorGet =  async (req, res, next) => {

    try {
      const id = req.params.id;
      const selectedAuthor = await Author.findById(id);
      return res.status(200).json(selectedAuthor);
  
    } catch (err) {

      console.log(err);
      return res.status(400).json(err);
    }
};

const authorPost = async (req, res, next) => {
    try {

        const newAuthor = new Author({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        });
        const createdAuthor = await newAuthor.save();
        return res.status(200).json(createdAuthor);
    } catch (err) {
      
        console.log("author post error: ", err);
        return res.status(400).json("The body of the request is not valid");
    }
};

const authorPut = async (req, res, next) => {
    try {
        const { _id: id, ...update } = req.body;

        const updatedAuthor = await Author.findByIdAndUpdate(
            id,
            update,
            { new: true }
        );

        return res.status(200).json(updatedAuthor);
    } catch (err) {
        // console.log("author update error: ", err);
        return res.status(400).json("The update was not done");
    }
};

const authorDelete = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedAuthor = await Author.findByIdAndDelete(id);
        return res.status(200).json(deletedAuthor);
    } catch (err) {
        // console.log('author delete error');
        res.status(400).json('The album could not be deleted');
    }
};

module.exports = {
    authorGet,
    authorPost,
    authorPut,
    authorDelete
};