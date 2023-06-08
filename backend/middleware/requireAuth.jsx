const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')


const requireAuth = async (req, res, next) =>{

    //verify authentication
    const { authorization } = req.headers

    if(!authorization){
        res.status(401).json({error: 'Authorization required'})
    }

    const token = authorization.split(' ')[1]

    //verify the token
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({_id}).select('_id')
        next()
    } catch (error) {
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth