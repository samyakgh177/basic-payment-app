const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL)
//schema 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }

});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

//model from the schmea

const Account = mongoose.model('Account',accountSchema)
const User = mongoose.model('User',userSchema);

module.exports = {
    User,
    Account
};