import mongoose from "mongoose"


const PostScheme = mongoose.Schema({
    title:{type:String,request:true},
    userId:{type:String,request:true},
    userName:{type:String,request:true},
    comments:{type:Array,request:true},
    paragraph:{type:String,request:true},
})

export default mongoose.model('PostScheme',PostScheme)