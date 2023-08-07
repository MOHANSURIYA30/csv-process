const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: { type: String, required: true},
    email:{ type: String, required: true},
    gender:{ type:String },
    user_type: {type: mongoose.Schema.Types.ObjectId, ref: 'user-types' },
    account_name:{type: mongoose.Schema.Types.ObjectId, ref: 'accounts'},
    city:{type: mongoose.Schema.Types.ObjectId, ref: 'cities'},
    account_type:{type: mongoose.Schema.Types.ObjectId, ref: 'account-types'},
    phone:{ type:String },
    address:{ type:String },
    state:{type: mongoose.Schema.Types.ObjectId, ref: 'states'},
    zip:{ type:String },
    dob:{ type:String },
    policy_number:{ type:String,unique:true,required:true },
    // policy:{type: mongoose.Schema.Types.ObjectId, ref: 'policys' }, 
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('users', userSchema)