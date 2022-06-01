

const getLoginForm = (req,res)=>{
    return res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{
    return res.render('signup/layout')
}
const signup = (req,res)=>{
    const {email,password} = req.body
}

module.exports ={getLoginForm,login,getSignupForm,signup}