const db = require("../models/index")

exports.createPolicys = async (data) => {
    try {
        
       let response = await db.Policy.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createPolicy = async (data) => {
    try {
        let response = new db.Policy(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getPolicy = async (query) => {
    try {
        let response = await db.Policy.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}



exports.getPolicys = async (query) => {
    try {
        let response = await db.Policy.find(query)
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.updatePolicy = async (query, data) => {
    try {
        let response = await db.Policy.findOneAndUpdate(query, { $set: data }, {
            new: true,
            upsert: false,
            useFindAndModify: false
        }).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.deletePolicy = async (query) => {
    try {
        let response = await db.Policy.findOneAndUpdate(query, { isDelete:true },{new: true}).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}