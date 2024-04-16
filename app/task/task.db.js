import { taskModel } from "./task.schema.js";

const createTask = (taskDetails)=> taskModel.create({...taskDetails});

const updateTask =  (taskId,updateTaskDetails)=> taskModel.updateOne({_id : taskId},{...updateTaskDetails});

const getOneTask = (taskId) => taskModel.findOne({id:taskId});

const getAllTasks = ()=>taskModel.find({isDeleted : false});

const updateTaskPriority =(taskId,taskDetails)=>  taskModel.updateOne({_id:taskId},{...taskDetails});

const deleteTask = (taskId) => taskModel.updateOne({_id:taskId},{isDeleted : true});





export default {
    createTask,
    updateTask,
    getOneTask,
    getAllTasks,
    updateTaskPriority,
    deleteTask
}