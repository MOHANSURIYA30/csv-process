const db = require("../models/index")

exports.createStates = async (data) => {
    try {
        
       let response = await db.State.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createState = async (data) => {
    try {
        let response = new db.State(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getState = async (query) => {
    try {
        let response = await db.State.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getStates = async (query) => {
    try {
        let response = await db.State.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}