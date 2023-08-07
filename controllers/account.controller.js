const helper = require('../util/responseHelper');
const service = require('../services/account.service');
const messages = require('../config/constants/messages')

exports.createAccount = async (req, res, next) => {
    try {
        let { body } = req;
        console.log(req.body);
        const response = await service.createAccount(body);
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.ACCOUNT.CREATED.error_code,
                "error_message": messages.ACCOUNT.CREATED.error_message
            });
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}

exports.getAllAccounts = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await service.getAccounts(body);
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

exports.getAccount = async (req, res, next) => {
    try {
        let query ={ _id:req.params.id,
                       isDelete:false,
                       isActive:true}
        
        const response = await service.getAccount(query);
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

exports.updateAccount = async (req, res, next) => {
    try {
        let { body } = req;
        const response = await service.updateAccount({ _id: req.params.id }, body)
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


exports.deleteAccount = async (req, res, next) => {
    try {
        const response = await service.deleteAccount({ _id: req.params.id })
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