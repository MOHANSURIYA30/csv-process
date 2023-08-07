const helper = require('../util/responseHelper');
const accountTypeService = require('../services/account-type.service');
const agentService = require('../services/agent.service');
const categoryService = require('../services/category.service');
const cityService = require('../services/city.service');
const companyService = require('../services/company.service');
const policyTypeService = require('../services/policy-type.service');
const stateService = require('../services/state.service');
const userTypeservice = require('../services/user-type.service');
const messages = require('../config/constants/messages')


exports.getAllAccountType = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await accountTypeService.getAccountTypes(body);
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

exports.getAllAgents = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await agentService.getAgents(body);
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


exports.getAllCategory = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await categoryService.getCategorys(body);
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


exports.getAllCities = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await cityService.getCitys(body);
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


exports.getAllCompany = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await companyService.getCompanys(body);
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

exports.getAllPolicyType = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await policyTypeService.getPolicyTypes(body);
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


exports.getAllState = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await stateService.getStates(body);
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


exports.getAllUserType = async (req, res, next) => {
    try {
        let { body } = req;
        body.isDelete = false
        body.isActive = true
        const response = await userTypeservice.getUserTypes(body);
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