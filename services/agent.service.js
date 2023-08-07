const db = require("../models/index")

exports.createAgents = async (data) => {
    try {
        
       let response = await db.Agents.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createAgent = async (data) => {
    try {
        let response = new db.Agents(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getAgent = async (query, projection = {}) => {
    try {
        let response = await db.Agents.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getAgents = async (query) => {
    try {
        let response = await db.Agents.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}