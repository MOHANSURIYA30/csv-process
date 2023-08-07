const db = require("../models/index")

exports.createUsers = async (data) => {
    try {
        
       let response = await db.User.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}


exports.createUser = async (data) => {
    try {
        let response = new db.User(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getUser = async (query) => {
    try {
        let response = await db.User.findOne(query)
        return response;
    } catch (error) {
        throw (error)
    }
}

exports.getUsers = async (query) => {
    try {
        let response = await db.User.find(query)
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.updateUser = async (query, data) => {
    try {
        let response = await db.User.findOneAndUpdate(query, { $set: data }, {
            new: true,
            upsert: false,
            useFindAndModify: false
        }).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.deleteUser = async (query) => {
    try {
        let response = await db.User.findOneAndUpdate(query, { isDelete:true },{new: true}).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}