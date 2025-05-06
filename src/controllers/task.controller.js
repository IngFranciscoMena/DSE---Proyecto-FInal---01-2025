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

exports.updateTask = async(req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!task){
            return res.status(404).json({ message: "Tarea no encontrada, no se puede actualizar" })
        }
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error no se logro obtener las tareas ❌' })
    }
}

exports.createTask = async(req, res) => {
    try {
        const task = new Task(req.body);
        task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error al guardar la tarea ❌" })
    }
}

exports.deleteTask = async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task){
            return res.status(404).json({ message: "Tarea no encontrada, no se puede eliminar" })
        }
        res.status(201).json({ message: "Tarea eliminada con extio"})
        
    } catch (error) {
        
    }
}