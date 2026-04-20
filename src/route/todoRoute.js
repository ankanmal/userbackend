import express from 'express';
import { createTodo, delTodo, getAllTodo, updateTodo } from '../controller/todoController.js';

const todoRouter = express.Router()

todoRouter.post('/createTodo', createTodo)
todoRouter.get('/getAllTodo',getAllTodo)
todoRouter.delete('/delTodo',delTodo)
todoRouter.put('/updateTodo',updateTodo)

export default todoRouter