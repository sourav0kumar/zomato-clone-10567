import express from 'express';
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";


// Private route authorization config
import privateRouteConfig from "./config/route.config";

import ConnectDb from "./database/connection";
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";


dotenv.config();


const zomato =express();
//adding some additional config
privateRouteConfig(passport);

zomato.use(express.json());
zomato.use(session({ secret: "ZomatoApp" }));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running",
    });
});

zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", passport.authenticate("jwt", { session: false }), User);

const PORT=4000;

zomato.listen(PORT,()=>{
    ConnectDb()
    .then(()=>{
        console.log("server is running!!!");
    })
    .catch((error)=>{
        console.log("server is running but database connection failed...");
        // console.log(error);
    })
    
});