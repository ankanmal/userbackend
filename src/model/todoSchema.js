import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
},{timestamps:true})

const todoList = mongoose.model('todoList', todoSchema)

export default todoList

