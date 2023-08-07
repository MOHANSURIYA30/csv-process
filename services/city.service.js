const db = require("../models/index")

exports.createCitys = async (data) => {
    try {
        
       let response = await db.City.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}


exports.createCity = async (data) => {
    try {
        let response = new db.City(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCity = async (query) => {
    try {
        let response = await db.City.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getCitys = async (query) => {
    try {
        let response = await db.City.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}