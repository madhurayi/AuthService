const express= require('express');
const bosdyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes= require('./routers/index');

// const UserService = require('./services/user-service');

const app= express();

const prepareAndStartServer=()=>{

    app.use(bosdyParser.json());
    app.use(bosdyParser.urlencoded({extended:true}));
    app.use('/api', apiRoutes);

    app.listen(PORT,async ()=>{
        console.log("Server started on ",PORT);
          
        // const service= new UserService();
        // //const newToken= service.createToken({email: 'madhupriya.rayi@gmail.com', id:1});
        // //console.log(newToken);
        // const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGh1cHJpeWEucmF5aUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzA5NDgwMTc1LCJleHAiOjE3MDk0ODAyMDV9.CdeRBHG-FidpC-LGsUO_xzoMLbC-NruF4f5jggEwUVU';
        // const response=service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer(); 