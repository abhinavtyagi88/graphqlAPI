const express = require('express')
const app = express()
const route = require('./resolvers/user')

app.use('./',route)

app.listen(3000,(req,res)=>{
    console.log("Database runnning !!")
})