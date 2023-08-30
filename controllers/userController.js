import user from "../models/user";
import bcrypt from "bcrypt";

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

