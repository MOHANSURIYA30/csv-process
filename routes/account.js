const express = require('express');
const router = express.Router();
const controller = require('../controllers/account.controller')

module.exports = () => {
    router.post('/create-account', controller.createAccount);
    router.get('/get-accounts', controller.getAllAccounts);
    router.get('/get-account/:id', controller.getAccount);
    router.put('/update-account/:id', controller.updateAccount);
    router.delete('/delete-account/:id', controller.deleteAccount);

    return router;
}