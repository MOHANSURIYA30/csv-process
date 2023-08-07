const express = require('express');
const router = express.Router();
const controller = require('../controllers/policy.controller')

module.exports = () => {
   
    router.post('/create-policy', controller.createPolicy);
    router.get('/get-policys', controller.getAllPolicys);
    router.get('/get-policy/:id', controller.getPolicy);
    router.put('/update-policy/:id', controller.updatePolicy);
    router.delete('/delete-policy/:id', controller.deletePolicy);

    return router;
}