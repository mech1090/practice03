const Joi = require('joi')

const userValidateSchema = (fields)=>{
    const validateSchema = Joi.object({
        email:Joi.string().min(8).max(24).required(),
        password:Joi.string().min(6).max(24).required()
    })
    const {error,value} = validateSchema.validate(fields)
    return {error,value}
}

module.exports = {userValidateSchema}
