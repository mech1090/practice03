const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},
{
    collection : 'Users'
})

const User = mongoose.model('User',userSchema)
module.exports = User
