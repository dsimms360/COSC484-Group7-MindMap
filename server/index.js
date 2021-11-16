import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import signupRoute from './routes/signUpRoute.js'

// const mongodb = require("mongodb");
const port = process.env.PORT || 5001;

const app = express();

app.use('/signup', signupRoute);

app.use(express.json({limit: "30mb", etended: true}));
app.use(express.urlencoded({limit: "30mb", etended: true}));
app.use(cors());

// (err, db) => {}
// MongoClient.connect(process.env.DB_URI, {userNewUrlParser:true, useUnifiedfieldTopology: true})
//     .then(() => app.listen(port, () => console.log("server running";)))
//     .catch(() => )

const mongoUrl = 'mongodb+srv://wbpgroup7:wbpgroup7Mind-Map@cluster0.uxoo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUrl)
    .then(() => app.listen(port, () => console.log(`server running on port: ${port}`)))
    .catch((err) => console.log(err.message));
