import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required:true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    //made this optional because some users might not have a last name
    lastName: {type: String},
    email: {type: String, unique:true, required: true},
    age: {type: Number}
});

export default mongoose.model('User', userSchema);