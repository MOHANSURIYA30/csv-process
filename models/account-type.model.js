const mongoose = require('mongoose');

const accountTypeSchema = mongoose.Schema({
    type: { type: String, required: true,unique:true},
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('account-types', accountTypeSchema)