import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import signup from "./routes/signup_route.js";

const port = process.env.PORT || 8001;

const app = express();

app.use("/", signup);
app.use("*", (req, res) => res.status(404).json({error: "404: page not found."}));

app.use(express.json());
app.use(express.urlencoded({etended: true}));
app.use(cors());

mongoose.connect(process.env.DB_URI)
    .catch((err) => {console.log(err.message); process.exit(1);})
    .then(() => app.listen(port, () => console.log(`server running on port: ${port}`)));
