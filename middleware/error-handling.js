const {errorHandles} = require('../errorHandling/errorHandler')
const errors_ = (err,req,res,next)=>{
    if(err instanceof errorHandles){
        return res.status(msg.statusCode).json({msg:msg.err})
    }
    res.status(500).json('not found')
}

module.exports = errors_