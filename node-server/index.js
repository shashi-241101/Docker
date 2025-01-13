import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(cors(
  {
  origin: '*',
  methods: ['GET', 'POST','PUT','DELETE'],
  credentials: true,
  maxAge: 3600,
  preflightContinue: false,
  optionsSuccessStatus: 200
  }
));

const Mongo_url= process.env.MONGO_URL;

const connectDB= async()=>{
  console.log('Connecting to MongoDB...');
  try{
   await mongoose.connect(Mongo_url);
    console.log('MongoDB connected successfully');

  } catch(err){
    console.log('Error: ', err);
  }
}

connectDB();

app.get("/", (req, res) => {
  res.send("Hello this is docker, Dockerized Node.js!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
