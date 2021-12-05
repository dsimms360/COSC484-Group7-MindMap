import mongoose from 'mongoose';

const progressSchema = mongoose.Schema({
    progress: {
        type: Number, 
        required: true, 
        min: 0, 
        max: 100
    }
});

const todolistSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    content: { 
        type: String,
    }
});

const notesSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    content: { 
        type: String,
    }
});

const calenderSchema = mongoose.Schema({
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
        required: true
    },
    content: { 
        type: String,
    }
});

const eventSchema = mongoose.Schema({
    eventid: {
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true
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
    clientid: {type: String, required: true},
    progress: [progressSchema],
    todolist: [todolistSchema],
    notes: [notesSchema],
    calender: [calenderSchema],
    quicklinks: [quicklinkSchema],
    events: [eventSchema]
});

const MindMapDB = mongoose.model('MindMapDB', dbSchema);

export default MindMapDB;