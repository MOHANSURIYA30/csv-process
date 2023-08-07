const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')

module.exports = () => {
    router.post('/create-user', controller.createUser);
    router.get('/get-users', controller.getAllUsers);
    router.get('/get-user/:id', controller.getUser);
    router.put('/update-user/:id', controller.updateUser);
    router.delete('/delete-user/:id', controller.deleteUser);

    return router;
}