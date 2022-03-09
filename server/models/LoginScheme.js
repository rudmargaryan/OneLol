import mongoose from "mongoose"

const LoginScheme = new mongoose.Schema({
    name:{type:String,request:true,unique:true},
    password:{type:String,request:true}
})

export default mongoose.model('LoginScheme',LoginScheme)