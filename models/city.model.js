const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: { type: String, required: true,unique:true},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('cities', citySchema)