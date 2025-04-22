const mongoose = require('mongoose');

const { Schema, Types, model } = mongoose;

// Manejar status: TODO, PROGRESS, COMPLETED
const TaskStatus = {
    TO_DO: 'TODO',
    IN_PROGRESS: 'PROGRESS',
    COMPLETED: 'COMPLETED'
}


const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: Object.values(TaskStatus),
        default: TaskStatus.TO_DO
    },
    starDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    userId: { 
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = {
    Task: model('Task', taskSchema),
    TaskStatus
}