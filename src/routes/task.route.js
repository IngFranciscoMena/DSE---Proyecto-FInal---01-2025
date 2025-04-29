const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

const { createTaskDto } = require('../dtos/task.dto')
const validate = require('../middlewares/validate.middleware');

router.get('/', taskController.getAllTask);
router.post('/', createTaskDto, validate, taskController.createTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;