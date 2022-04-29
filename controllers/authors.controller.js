const Author = require("../models/Author.model");


const authorsGet = async (req, res) => {

	try {
		const authors = await Author.find();
		return res.status(200).json(authors);

	} catch (err) {
		return res.status(400).json(err);
	}
};

const authorGet =  async (req, res) => {

    try {
      const id = req.params.id;
      const selectedAuthor = await Author.findById(id);
      return res.status(200).json(selectedAuthor);
  
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
};

module.exports = {
    authorsGet,
    authorGet,
};