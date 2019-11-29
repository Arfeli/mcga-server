const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    date: String,
    userId: Schema.Types.ObjectId
});
const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo;