const db = require("../models/index")

exports.createCompanys = async (data) => {
    try {
        
       let response = await db.Company.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createCompany = async (data) => {
    try {
        let response = new db.Company(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCompany= async (query) => {
    try {
        let response = await db.Company.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCompanys = async (query) => {
    try {
        let response = await db.Company.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}