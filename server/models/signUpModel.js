import mongoose from 'mongoose';

const usersSchema = {
    title: String,
    content: String
}

const User = mongoose.model("Note", usersSchema);

export default User;
// module.exports = User;