//server -> db -> server -> model(schema) -> controller(function) -> route(api) -> server

import express from "express";
import dbConnect from "./src/config/dbConnect.js";
import 'dotenv/config'
import userRoute from "./src/routes/userRoute.js";
import todoRoute from "./src/routes/todoRoute.js";

const app = express();
const port = process.env.PORT
dbConnect()
app.use(express.json())
app.use('/user', userRoute)
app.use('/todo', todoRoute)


app.listen(port,()=>{
    console.log(`Server Started on Port: ${port}`)
})
