const { body } = require('express-validator')

exports.createTaskDto = [
    body('title')
        .notEmpty().withMessage('El titulo es un campo obligatorio')
        .isString().withMessage('El titulo debe ser un texto'),

    body('endDate')
        .notEmpty().withMessage('la fecha final es campo obligatorio')
        .isISO8601().withMessage('Debe ser una fecha valida')
]