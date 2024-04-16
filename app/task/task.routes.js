import { Router } from "express";
import taskService from "./task.service.js";
import { ResponseHandler } from "../../common/utils/handlers.js";
import { ROUTE_CONSTANTS } from "../../common/constants/routeConstants.js";
import { SUCCESS_CODES } from "../../common/constants/statusCode.constants.js";

const { CREATE_TASK, GET_ALL_TASKS,DELETE_TASK,CHANGE_PRIORITY } = ROUTE_CONSTANTS;
const { OK } = SUCCESS_CODES;

export const taskRouter = Router();

taskRouter.post(CREATE_TASK, async (req, res, next) => {
  try {
    const { body } = req;
    const { statusCode, message } = await taskService.createTask(body);
    res.status(statusCode).send(new ResponseHandler(message));
  } catch (error) {
    next(error);
  }
});

taskRouter.get(GET_ALL_TASKS, async (req, res, next) => {
  try {
    const response = await taskService.getAllTasks();
    res.status(OK).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});


taskRouter.put(CHANGE_PRIORITY,async(req,res,next)=>{
    try {
        const {params:{taskId},body} = req;
        const {statusCode,message} = await taskService.changePriority(taskId,body);
        res.status(statusCode).send(new ResponseHandler(message));
    } catch (error) {
        next(error);
    }
})


taskRouter.put(DELETE_TASK,async(req,res,next)=>{
    try {
        const {params:{taskId}} = req;
        const {statusCode,message} = await taskService.deleteTask(taskId);
        res.status(statusCode).send(new ResponseHandler(message));
    } catch (error) {
        next(error);
    }
})
