const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    Phone:{
        type:Number,
        required:true,
    },
    Work:{
        type:String,
        required:true,
    },
    Passwod:{
        type:String,
        required:true,
    },
    cPasswod:{
        type:String,
        required:true,
    },
})

const User = mongoose.model('USER', userSchema)

module.exports = User 