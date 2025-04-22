const User  = require('../models/user.model');

exports.registroUsuario = async(req, res) => {
    try {

        const email = req.body.email;
        const username = req.body.username;

        const exist = await User.findOne({ $or: [{email}, {username}]});

        if (exist) return res.status(400).json({ message: 'usuario o email ya registrados ⚠️'});

        const usuario = new User(req.body);
        
        await usuario.save();
        res.status(201).json(usuario);   
    } catch(error) {
        res.status(500).json({ message: 'Error al registrar el usuario ❌' })
    }
}
