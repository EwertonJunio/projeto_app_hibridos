const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/', userController.createUser);

// Rota para listar todos os usuários
router.get('/', userController.getAllUsers);

// Rota para buscar um usuário por ID
router.get('/:id', userController.getUserById);

// Rota para atualizar um usuário por ID
router.put('/:id', userController.updateUserById);

// Rota para deletar um usuário por ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;

///Atualizei as rotas para utilizar os endpoints associados aos usuários, gerenciados pelo UserController, e configuradas para executar as operações CRUD correspondentes aos usuários.