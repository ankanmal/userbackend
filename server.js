//server -> db -> server -> model(schema) -> controller(function) -> route(api) -> server

import express from "express";
import dbConnect from "./src/config/dbConnect.js";
import 'dotenv/config'
import userRoute from "./src/routes/userRoute.js";

const app = express();
const port = process.env.PORT
dbConnect()
app.use(express.json())
app.use('/user', userRoute)


app.listen(port,()=>{
    console.log(`Server Started on Port: ${port}`)
})
