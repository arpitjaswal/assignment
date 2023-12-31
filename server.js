import express from "express";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

dotenv.config();


//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/users", userRoutes);

//dummy database connection
// mongoose.connect('mongodb://localhost/rudra', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

//make server listen on a specific port
const PORT = process.env.PORT || 1234;
const MODE = process.env.MODE;

app.listen(PORT, ()=>{
    console.log(`Server started running on the port ${PORT} in the ${MODE} mode.`)
})