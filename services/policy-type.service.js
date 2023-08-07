const db = require("../models/index")

exports.createPolicyTypes = async (data) => {
    try {
        
       let response = await db.PolicyType.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createPolicyType = async (data) => {
    try {
        let response = new db.PolicyType(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getPolicyType = async (query) => {
    try {
        let response = await db.PolicyType.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getPolicyTypes = async (query) => {
    try {
        let response = await db.PolicyType.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}