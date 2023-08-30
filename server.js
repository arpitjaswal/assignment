import express from "express";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes"
import bodyParser from "body-parser";


const app = express();

dotenv.config();


//middlewares
app.use("/users", userRoutes);
app.use(bodyParser.json());


//make server listen on a specific port
const PORT = process.env.PORT || 1234;
const MODE = process.env.MODE;

app.listen(PORT, ()=>{
    console.log(`Server started running on the port ${PORT} in the ${MODE} mode.`)
})