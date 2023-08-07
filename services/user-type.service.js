const db = require("../models/index")

exports.createUserTypes = async (data) => {
    try {
        
       let response = await db.UserType.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}


exports.createUserType = async (data) => {
    try {
        let response = new db.UserType(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getUserType = async (query) => {
    try {
        let response = await db.UserType.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getUserTypes = async (query) => {
    try {
        let response = await db.UserType.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}