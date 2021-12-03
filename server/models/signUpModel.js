import mongoose from 'mongoose';

const signUP = mongoose.Schema({

    emailAddress: { 
        type: String, 
        required: true, 
        unique: true  
    },
    phoneNumber: {
        String 
    },
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true  
    },
    password: { 
        type: String, 
        required: true 
    },
    verifyPassword: { 
        type: String, 
        required: true 
    },

    // title: String,
    // content: String
});

const SignUp = mongoose.model("SignUp", signUP);

export default SignUp;
// module.exports = User;