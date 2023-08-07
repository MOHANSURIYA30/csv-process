const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: { type: String, required: true,unique:true},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('categories', categorySchema)