const userRepository = require('../repositories/userRepository');

exports.createUser = async(req, res) => {
    try {
        const user = await userRepository.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Implementei outros métodos.

exports.getAllUsers = async(req, res) => {
    try {
        const users = await userRepository.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await userRepository.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserById = async(req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userRepository.updateById(userId, userData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUserById = async(req, res) => {
    try {
        const userId = req.params.id;
        await userRepository.deleteById(userId);
        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};