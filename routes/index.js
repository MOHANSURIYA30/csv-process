const express = require('express')
const router = express.Router();
const logger = require("morgan");
router.use(logger("dev"));


const uploadRoutes = require('./upload')
const accountRoutes = require('./account')
const userRoutes = require('./user')
const policyRoutes = require('./policy')
const generalRoutes = require('./general')

module.exports = () => {


    router.use('', uploadRoutes());
    router.use('',accountRoutes());
    router.use('',userRoutes());
    router.use('',policyRoutes());
    router.use('',generalRoutes());
    
    router.get("*", (req, res) => {
        res.status = 404;
        res.json({
            success: false,
            message: "Unknown command, that means you have done something wrong.",
            errorCode: 404,
            result: {},
        });
    });

    return router
}