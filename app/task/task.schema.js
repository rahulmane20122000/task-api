import {model} from 'mongoose';
import {BaseSchema} from '../../common/utils/baseSchema.js'


const taskSchema = new BaseSchema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      assignedTo: {
        type: String,
        required: true
      },
      priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required : true
      },
      category: {
        type: String,
        enum : ['UI','API','QA','DATA'],
        required : true
      }
});


export const taskModel = model("tasks",taskSchema);