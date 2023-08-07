const express = require('express');
const router = express.Router();
const controller = require('../controllers/upload.controller')
const upload = require("../util/upload")
module.exports = () => {
    router.get('/get-datas', controller.createDatas);
    router.post('/create-datas', upload.single('file'), controller.createDatas);

    return router;
}