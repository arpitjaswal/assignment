import user from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import nodemailer from "nodemailer";

dotenv.config();

//controller for creating an user
const createUser = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 11);

        const user = await user.create({username, password: hashedPassword});
        res.json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
//login controller
const login = async (req,res)=>{
    try {
        const {username, password} = req.body;
        //try to find if there is an user with that username
        const User = await user.findOne({username});
        if(!User){
            return res.status(401).json({ error: 'No such user present' });
        }
       
        const matchPassword = await bcrypt.compare(password, User.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid password' });
        }

        const jwtToken = jwt.sign({userID: User._id}, process.env.SECRETKEY, {expiresIn:"1h"});
        res.json({jwtToken});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//forgot password
const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: process.env.email,
        password: process.env.password,
    },
})


const forgotPassword = async(req,res)=>{
    try {
        const {email} = req.body;

        const mailOptions = {
            from: process.env.email,
            to: email,
            subject: "Reset Password",
            text:"Click the link to reset your password:",
        }
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Password reset email sent' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//updating a user
const updateUser = async (req, res) => {
    try {
      const { userID } = req.params;
      const { username, password } = req.body;
  
      const updatedUser = await user.findByIdAndUpdate(userID, { username, password });
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //delete a user
  const deleteUser = async (req,res)=>{
    try {
        const {userID} = req.params;
        const userDeleted = await user.findByIdAndDelete(userID);
        if(!userDeleted){
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({message: "User deleted successfully!"});
    } catch (error) {
        res.status(500).json({error:error.message})
    }
  }
  
  
  