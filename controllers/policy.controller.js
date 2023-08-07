const helper = require('../util/responseHelper');
const service = require('../services/policy.service');
const messages = require('../config/constants/messages')

exports.createPolicy = async (req, res, next) => {
    try {
        let { body } = req;
        console.log(req.body);
        const response = await service.createPolicy(body);
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.POLICY.CREATED.error_code,
                "error_message": messages.POLICY.CREATED.error_message
            });
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}

exports.getAllPolicys = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await service.getPolicys(body);
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

exports.getPolicy = async (req, res, next) => {
    try {
        let query ={ _id:req.params.id,
                       isDelete:false,
                       isActive:true}
        
        const response = await service.getPolicy(query);
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

exports.updatePolicy = async (req, res, next) => {
    try {
        let { body } = req;
        const response = await service.updatePolicy({ _id: req.params.id }, body)
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.POLICY.UPDATED.error_code,
                "error_message": messages.POLICY.UPDATED.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}


exports.deletePolicy = async (req, res, next) => {
    try {
        const response = await service.deletePolicy({ _id: req.params.id })
        if (response) {
            helper.deliverResponse(res, 200, {}, {
                "error_code": messages.POLICY.DELETED.error_code,
                "error_message": messages.POLICY.DELETED.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}