import express from "express";

const router = express.Router();

//route for creating a user
router.post("/", userController.createUser);

//route for editing user details
router.put("/:userID", userController.updateUser);

//route for deleting an existing user
router.delete("/:userID", userController.deleteUser);

//route for logging in the user into the application
router.post("/login", userController.loginUser);

//route for forgot password case
router.post("/forgotPassword", userController.forgotPassword);

export default router;