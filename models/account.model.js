const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    name: { type: String, required: true,unique:true},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('accounts', accountSchema)