const express = require('express')
const router = express.Router()

router.get('/createUser',()=>{
    console.log('create user')
})

module.exports = router