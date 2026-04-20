
import todoList from '../model/todoSchema.js';


export const createTodo = async(req, res)=>{
    try{
        const {title} = req.body
        // const newTodo =  new todoList({title})
        // await newTodo.save()
        const newTodo = await todoList.create({title})
        res.status(201).json({
            success: true,
            data:newTodo
        })
    }catch(error){
        res.status(400).json({
            success: false,
            error:error
        })
    }
}

export const getAllTodo = async (req, res)=>{
    try {
        const allTodo = await todoList.find({})
        res.status(200).json({
        success: true,
        message:'Todo Fetched Succesfully',
        data:allTodo
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Failed to fetched Todo',
            error
        })
    }
}

export const delTodo = async(req, res)=>{

    try {
        const {id} = req.body
        // console.log(itemToDel)
        const delTodo = await todoList.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:'Todo Deleted Succesfully',
            data: delTodo
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Failed to Delete todo'
        })
        
    }
}

export const updateTodo = async(req, res)=>{
    try {
        const updateTodo = req.body
        const updated = await todoList.findByIdAndUpdate({_id:updateTodo.id},{title:updateTodo.updateTitle},{new:true})
        res.status(201).json({
            success:true,
            message:"todo Updated",
            data:updated,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }
}

