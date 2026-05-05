import todoSchema from "../models/todoSchema.js"


export const createTodo = async(req, res)=>{
    try {
        const {title}= req.body
        const newTodo = await todoSchema.create({title:title, userId:req.userId})
        return res.status(201).json({
            success: true,
            message:"Todo Created",
            data: newTodo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllTodo = async(req, res)=>{
    try {
        const allTodo = await todoSchema.find({userId:req.userId})
        return res.status(200).json({
            success: true,
            message:"Todo fetched",
            data: allTodo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}