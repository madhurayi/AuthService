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

const signIn= async(req,res)=>{
    try{
        const response= await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully signed in",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong at sigin',
            success: false,
            err: error,
            data:{}
        })
    }
}

const isAuthenticated= async (req,res) =>{
    try{
        const token= req.header('x-access-token');
        const response= await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: 'user is authenticated and token is valid'
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false,
            err: error,
            data:{}
        })
    }
}
module.exports ={
    create,
    signIn,
    isAuthenticated
} 