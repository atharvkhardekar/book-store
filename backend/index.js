import express from "express";
// import { PORT , mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import dotenv from 'dotenv'
import path from 'path';
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;

const __dirname = path.resolve();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());



// routes


// Middleware for parsing request body
app.use('/books', booksRoute);
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})


// Middleware for handling CORS Policy
// Option 1 : Allow All Origins with Default of cors(*)

// Option 2 : Allow Custom Origins
// app.use(
    //      cors({
        //         origin: 'http://localhost:5173',
        //         methods: ['GET','POST','PUT','DELETE'],
        //         allowedHeaders: ['Content-Type'],
        //      })
        // );
        
        mongoose
        .connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
})

