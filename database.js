const mongoose = require('mongoose')

const Url = 'mongodb://localhost:27017/students'

const ConnectMongo = ()=>{
    mongoose.connect(Url,()=>{
        console.log('Succesfully connect Database')
    })
}

module.exports = ConnectMongo