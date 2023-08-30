import express from "express";
import * as userController from "../controllers/userController.js";
const userRoutes = express.Router();

//route for creating a user
userRoutes.post("/", userController.createUser);

//route for editing user details
userRoutes.put("/:userID", userController.updateUser);

//route for deleting an existing user
userRoutes.delete("/:userID", userController.deleteUser);

//route for logging in the user into the application
userRoutes.post("/login", userController.loginUser);

//route for forgot password case
userRoutes.post("/forgotPassword", userController.forgotPassword);

export default userRoutes;