const { Task, TaskStatus } = require('../models/task.model');

exports.getAllTask = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error){
        console.log(error);
        res.status(500).json({ message: 'Error no se logro obtener las tareas ❌' })
    }
};