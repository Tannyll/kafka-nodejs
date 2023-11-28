import express from "express"
import {postUser} from "../controllers/userController.js"

export const userRouter = express.Router()

userRouter.post("/users", postUser);

userRouter.get("/users",async (req, res)=> {
    return res.status(200).json({total_user : 0})
});

