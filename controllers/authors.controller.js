const Author = require("../models/Author.model");


const authorsGet = async (req, res) => {

	try {
		const authors = await Author.find();
		return res.status(200).json(authors);

	} catch (err) {
		return res.status(400).json(err);
	}
};


module.exports = {
    authorsGet,
};