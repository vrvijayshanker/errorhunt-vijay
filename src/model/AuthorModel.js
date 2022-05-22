const mongoose = require('mongoose');
//OLD
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://vijayvr:iyy7IAu38wJ5q4hp@cluster0.zt8bq.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;