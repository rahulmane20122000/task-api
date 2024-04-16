import { Schema } from "mongoose";

export class BaseSchema extends Schema {
    constructor(structure, options) {
        super({
            ...structure,
            createdBy: {
                type: String,
               
            },
            updatedBy: {
                type: String
            },
            isDeleted: {
                type: Boolean,
                default: false,
            }
        }, { timestamps: true,...options })
    }
}