//server -> db -> server -> model(schema) -> controller(function) -> route(api) -> server

import express from "express";
import dbConnect from "./src/config/dbConnect.js";
import todoRouter from "./src/route/todoRoute.js";

const app = express();
const port = 9000;
dbConnect()
app.use(express.json())
app.use('/',todoRouter)


app.listen(port,()=>{
    console.log(`Server Started on Port: ${port}`)
})
