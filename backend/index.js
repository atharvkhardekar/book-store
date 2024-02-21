import express from "express";
// import { PORT , mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;

console.log(PORT)


const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req,res) =>{
    console.log(req);
    return res.status(234).send('Welcome');
});

// Middleware for parsing request body
app.use('/books', booksRoute);


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

