const db = require("../models/index")

exports.createAccountTypes = async (data) => {
    try {
        
       let response = await db.AccountType.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createAccountType = async (data) => {
    try {
        let response = new db.AccountType(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getAccountType = async (query, projection = {}) => {
    try {
        let response = await db.AccountType.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getAccountTypes = async (query) => {
    try {
        let response = await db.AccountType.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}