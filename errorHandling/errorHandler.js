class errorHandles extends Error{
    constructor(msg,statusCode){
        super(msg);
        this.statusCode = statusCode
    }
}

const customeHandler = ()=>{
    return new errorHandles(msg,statusCode)
}

module.exports ={
    errorHandles,
    customeHandler
}