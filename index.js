const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Plumbing OK')
})

app.get('*',(req,res)=>{
    res.send('BAD RESOURCE')
})

const port = 3300

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})