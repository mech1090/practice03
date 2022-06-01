const {userValidateSchema} = require('../validator/user.validator')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const config = require('config')
const userService = require('../service/user.service')


const getLoginForm = (req,res)=>{
    return res.render('login/layout')
}
const login = async(req,res)=>{
    const {email,password}  = req.body
   const{error,value} = userValidateSchema({email,password})
   if(error){
       return res.render('login/layout',{message:error.details[0].message})
   }
   const findUser = await userService.findFields({email})
   if(!findUser){
       return res.render('signup/layout',{message:'User does not exist please Signup'})
   }
   const matchPassword = await bcrypt.compare(password,findUser.password)
   if(!matchPassword){
       return res.render('login/password',{message:'user or password wrong'})
   }

    return res.render('user/layout',{message:'login'})
}

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

    const hashedPassword = await bcrypt.hash(password,config.get('hashed.salt'))

    const findUser = await userService.findFields({email})
    if(findUser){
        return res.render('login/layout',{message:'User Exists login'})
    }
    
    const createUser = await userService.createFields({email,password:hashedPassword})
    return res.render('signup/layout',{message:'User Created'})

}

module.exports ={getLoginForm,login,getSignupForm,signup}