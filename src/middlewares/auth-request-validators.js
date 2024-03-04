const validateUserAuth= (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data: {},
            message: "Something went wrong",
            error: "Email or Password missing in the signup request"
        })
    }
    next();
}

const validateAdminRequest= (req,res,next)=>{
    if(!req.body.userId){
        return res.status(200).json({
            success: true,
            data: {},
            err: 'User is not given',
            message: 'Something went wrong'
        })
    }
    next();
}
module.exports={
    validateUserAuth,
    validateAdminRequest 
}