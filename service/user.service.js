
const User = require('../model/user')

const findFields =async(fields)=>{
    const findUser = User.findOne(fields)
    return findUser
}

const createFields = async(fields) =>{
    const createEntry = User.create(fields)
    return createEntry

}

module.exports = {findFields,createFields}
