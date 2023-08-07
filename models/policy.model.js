const mongoose = require('mongoose');

const policySchema = mongoose.Schema({
    policy_number:{ type:String,unique:true,required:true },
    agent: {type: mongoose.Schema.Types.ObjectId, ref: 'agents'},
    producer:{ type:String },
    csr:{ type:String },
    policy_mode:{ type:String},
    premium_amount_written:{ type:String },
    premium_amount:{ type:String },
    policy_type: {type: mongoose.Schema.Types.ObjectId, ref: 'policy-types' },
    company_name:{type: mongoose.Schema.Types.ObjectId, ref: 'companys'},
    category_name:{type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    policy_start:{ type:String },
    policy_end:{ type:String },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('policys', policySchema)