const mongoose = require('mongoose');
//OLD
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://vijayvr:iyy7IAu38wJ5q4hp@cluster0.zt8bq.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;