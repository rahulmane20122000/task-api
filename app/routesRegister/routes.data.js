import { RouteHandler } from "../../common/utils/handlers.js";
import { ROUTE_CONSTANTS } from "../../common/constants/routeConstants.js";
import { taskRouter } from "../task/task.routes.js";


const { TASK } = ROUTE_CONSTANTS;

export const routes = [
  new RouteHandler(TASK,taskRouter)
];
