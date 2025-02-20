import express from "express"
const router =express.Router();

router.get("/",(req,res)=>{
    req.send("Welcome")
})


export default router;