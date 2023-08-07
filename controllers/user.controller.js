const helper = require('../util/responseHelper');
const service = require('../services/user.service');
const messages = require('../config/constants/messages')

exports.createUser = async (req, res, next) => {
    try {
        let { body } = req;
        console.log(req.body);
        const response = await service.createUser(body);
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.USER.CREATED.error_code,
                "error_message": messages.USER.CREATED.error_message
            });
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await service.getUsers(body);
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.SUCCESS_RESPONSE.error_code,
                "error_message": messages.SUCCESS_RESPONSE.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}

exports.getUser = async (req, res, next) => {
    try {
        let query ={ _id:req.params.id,
                       isDelete:false,
                       isActive:true}
        
        const response = await service.getUser(query);
        helper.deliverResponse(res, 200, response, {
            "error_code": messages.SUCCESS_RESPONSE.error_code,
            "error_message": messages.SUCCESS_RESPONSE.error_message
        })
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        let { body } = req;
        const response = await service.updateUser({ _id: req.params.id }, body)
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.ACCOUNT.UPDATED.error_code,
                "error_message": messages.ACCOUNT.UPDATED.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}


exports.deleteUser = async (req, res, next) => {
    try {
        const response = await service.deleteUser({ _id: req.params.id })
        if (response) {
            helper.deliverResponse(res, 200, {}, {
                "error_code": messages.ACCOUNT.DELETED.error_code,
                "error_message": messages.ACCOUNT.DELETED.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}