const db = require("../models/index")

exports.createAccounts= async (data) => {
    try {
        
       let response = await db.Account.insertMany(data,{ordered: false})
        return response;
    } catch (error) {
        if(error.code == 11000)
        {
            return error.code
        }
        throw (error)
    }
}

exports.createAccount = async (data) => {
    try {
        let response = new db.Account(data);
        await response.save()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getAccount = async (query) => {
    try {
        let response = await db.Account.findOne(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.getAccounts = async (query) => {
    try {
        let response = await db.Account.find(query,{ "isActive": 0,"isDelete": 0, "__v": 0})
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.updateAccount = async (query, data) => {
    try {
        let response = await db.Account.findOneAndUpdate(query, { $set: data }, {
            new: true,
            upsert: false,
            useFindAndModify: false
        }).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}


exports.deleteAccount = async (query) => {
    try {
        let response = await db.Account.findOneAndUpdate(query, { isDelete:true },{new: true}).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}
