import express from "express";
import cors from"cors";
import hpp from "helmet";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import expressratelimit, { rateLimit } from "express-rate-limit";
import mongoose from "mongoose";

const app =express();
// Global Application Middleware
app.use(cors())//cors origin hisabe kaj kore ar application e multiple client thake req gula k cors package handle kore 
app.use(express.json({limit:"30mb"}))
app.use(hpp()) //query parameter mane link er ? diye jei gula kori arki oi gula jate duplicate na hoi ta dekhe hpp

app.use(helmet())//http headers gula niye kaj kore 
app.use(cookieParser())//client site er cookie gula k parse korar jonno cookie parser use kori 

//express rate limit er kaj ki ?(5 min e 500 ta request )
const limiter =rateLimit({windowMs: 5*60*1000,max:500})
app.use(limiter)