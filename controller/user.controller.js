const {userValidateSchema} = require('../validator/user.validator')
const User = require('../model/user')

const getLoginForm = (req,res)=>{
    return res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{
    return res.render('signup/layout')
}
const signup = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const {error,value} = userValidateSchema(fields)
    if(error){
        res.render('signup/layout',{message:error.details[0].message})
    }

    const createUser = await User.create({email,password})
    return res.render('signup/layout')

}

module.exports ={getLoginForm,login,getSignupForm,signup}