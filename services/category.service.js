const db = require("../models/index")

exports.createCategorys = async (data) => {
    try {
        
       let response = await db.Category.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createCategory = async (data) => {
    try {
        let response = new db.Category(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCategory = async (query) => {
    try {
        let response = await db.Category.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCategorys = async (query) => {
    try {
        let response = await db.Category.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}