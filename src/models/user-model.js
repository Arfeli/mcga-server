const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
    lastName: String,
    password: {type: String, required: true},
    email: String,
    thingsTodo:[{
        type: Schema.Types.ObjectId,
        ref:'todo'
    }]
});
const User = mongoose.model('user', userSchema);
module.exports = User;