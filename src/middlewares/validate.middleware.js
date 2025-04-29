const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){ // erros.isEmpt() true/false => true -> ! (not) 
        return res.status(400).json({ error: errors.array() })
    }
    next();
}