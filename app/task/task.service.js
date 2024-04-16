import taskDb from "./task.db.js";
import { TASK_RESPONSES } from "./task.responses.js";

const { TASK_CREATED, TASK_DELETED, TASK_UPDATED } = TASK_RESPONSES;

const createTask = async (taskDetails) => {
  try {
    await taskDb.createTask(taskDetails);
    return TASK_CREATED;
  } catch (error) {
    throw error;
  }
};

const getAllTasks = async () => {
  try {
    const tasks = await taskDb.getAllTasks();
    return tasks;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    await taskDb.deleteTask(taskId);
    return TASK_DELETED;
  } catch (error) {
    throw error;
  }
};

const changePriority = async (taskId, taskDetails) => {
  try {
    await taskDb.updateTaskPriority(taskId, taskDetails);
    return TASK_UPDATED;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export default {
  createTask,
  getAllTasks,
  deleteTask,
  changePriority
};
