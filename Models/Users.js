const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    studentFirstName:{type:String,require:true},
    collageName:{type:String,require:true},
    location:{type:String,require:true}
})
const User = mongoose.model('user',userSchema)
module.exports  = User

