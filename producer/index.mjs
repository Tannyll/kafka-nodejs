import express from "express";
import { connectDB } from "./config/connectDb.js"
import {userRouter} from "./routes/user.routes.js";
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())
app.use('/api/', userRouter)

connectDB();

const PORT = process.env.PORT

app.listen(PORT, (err) => err ? console.log(err): console.log(`Server started nd running on ${process.env.HOST}`))
