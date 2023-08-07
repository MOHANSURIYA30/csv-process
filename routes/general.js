const express = require('express');
const router = express.Router();
const controller = require('../controllers/general.controller')

module.exports = () => {
    router.get('/get-account-types', controller.getAllAccountType);
    router.get('/get-agent', controller.getAllAgents);
    router.get('/get-category', controller.getAllCategory);
    router.get('/get-city', controller.getAllCities);
    router.get('/get-company', controller.getAllCompany);
    router.get('/get-policy-types', controller.getAllPolicyType);
    router.get('/get-state', controller.getAllState);
    router.get('/get-user-types', controller.getAllUserType);


    return router;
}