import mongoose from 'mongoose';

const userToken = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
    },
    givenName: {
        type: String,
        required: true
    },
    googgleId: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const todolistSchema = mongoose.Schema({
    task: { 
        type: String,
    }
});

const notesSchema = mongoose.Schema({
    notes: { 
        type: String,
    }
});

const calenderSchema = mongoose.Schema({
    // title:{type: String}
    // title: { 
    //     type: String, 
    //     required: true
    // },
    // content: { 
    //     type: String,
    // }
});

const quicklinkSchema = mongoose.Schema({
    title: { 
        type: String, 
    },
    link: { 
        type: String,
    }
});

const eventSchema = mongoose.Schema({
    eventid: {
        type: String,
    },
    title: { 
        type: String, 
    },
    starttime: {
        type: String
    },
    endtime: {
        type: String
    },
    location: {
        type: String
    }
});

const dbSchema = mongoose.Schema({
    userToken: [userToken],
    todolist: [todolistSchema],
    notes: [notesSchema],
    calender: [calenderSchema],
    quicklinks: [quicklinkSchema],
    events: [eventSchema]
});

const MindMapDB = mongoose.model('MindMapDB', dbSchema);

export default MindMapDB;