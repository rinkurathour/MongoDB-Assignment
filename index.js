const express = require('express')
const app = express()
const port = 3300
const ConnectMongo = require('./database')
app.use(express.json())
app.use('/student',require('./Router/user'))

ConnectMongo()

app.listen(port,()=>{
    console.log(`app is running  succesfully in ${port}`)
})