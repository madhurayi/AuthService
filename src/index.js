const express= require('express');
const bosdyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes= require('./routers/index');

// const {User}= require('./models/index');
// const bcrypt = require('bcrypt');

const app= express();

const prepareAndStartServer=()=>{

    app.use(bosdyParser.json());
    app.use(bosdyParser.urlencoded({extended:true}));
    app.use('/api', apiRoutes);

    app.listen(PORT,async ()=>{
        console.log("Server started on ",PORT);
        // const incomingPassword='12345634';
        // const user= await User.findByPk(3);
        // const response= bcrypt.compareSync(incomingPassword,user.password);
        // console.log(response);
    })
}

prepareAndStartServer(); 