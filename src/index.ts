import express from 'express'

const app=express()

app.get("/",(req,res)=>{
    res.send("Working Fine")
})

app.listen(3000,()=>{console.log("App is listening")})