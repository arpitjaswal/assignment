import express from "express";
import dotenv from "dotenv"



const app = express();

dotenv.config();






//make server listen on a specific port
const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE;

app.listen(PORT, ()=>{
    console.log(`Server started running on the port ${PORT} in the ${MODE} mode.`)
})