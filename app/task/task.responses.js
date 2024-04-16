import { SUCCESS_CODES } from "../../common/constants/statusCode.constants.js";
import { SUCCESS_MESSAGE } from "../../common/constants/statusMessages.constants.js";
import { MessageHandler } from "../../common/utils/handlers.js";



const {CREATED} = SUCCESS_CODES;
const {CREATED_MESSAGE,UPDATED_MESSAGE,DELETED_MESSAGE} = SUCCESS_MESSAGE;


export const TASK_RESPONSES = {
    TASK_CREATED : new MessageHandler(CREATED,CREATED_MESSAGE),
    TASK_UPDATED: new MessageHandler(CREATED,UPDATED_MESSAGE),
    TASK_DELETED: new MessageHandler(CREATED,DELETED_MESSAGE)
}