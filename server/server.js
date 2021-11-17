import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//for example file
import signupRoute from './routes/signUpRoute.js'

dotenv.config();
// const mongodb = require("mongodb");
const port = process.env.PORT || 5001;

const app = express();

app.use('/signup', signupRoute);
// app.use('/posts', postRoutes);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// (err, db) => {}
// MongoClient.connect(process.env.DB_URI, {userNewUrlParser:true, useUnifiedfieldTopology: true})
//     .then(() => app.listen(port, () => console.log("server running";)))
//     .catch(() => )


mongoose.connect(process.env.DB_URI)
    .then(() => app.listen(port, () => console.log(`server running on port: ${port}`)))
    .catch((err) => console.log(err.message));
