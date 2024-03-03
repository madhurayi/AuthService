const UserService = require('../services/user-service');

const userService= new UserService();

const create= async(req,res)=>{
    try{
        const response= await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created a new user",
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong at Controller',
            success: false,
            err: error,
            data:{}
        })
    }
}

module.exports ={
    create
} 