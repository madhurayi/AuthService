const express= require('express');
const bosdyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes= require('./routers/index');

const db= require('./models/index');

const app= express();

const prepareAndStartServer=()=>{

    app.use(bosdyParser.json());
    app.use(bosdyParser.urlencoded({extended:true}));
    app.use('/api', apiRoutes);

    app.listen(PORT,async ()=>{
        console.log("Server started on ",PORT);
        if(process.env.DB_SYNC){
                db.sequelize.sync({alter: true});
        }  

           
    })
}

prepareAndStartServer(); 