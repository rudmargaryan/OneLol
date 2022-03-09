import { Router } from "express";
import PostScheme from "../../models/PostScheme.js";

const  postrouter = new Router()

postrouter.get('/all',async(req,res)=>{
    // const newPost = await PostScheme.create({userId:'621a5e0da8b2987ee0cb2682',userName:'rud_margaryan',title:'asd',paragraph:'asd'})
    const posts = await PostScheme.find().limit(15).sort({_id:-1})
    res.json(posts)
})
postrouter.get('/mypage/take/:id',async (req,res)=>{
    const id = req.params.id
    const posts = await PostScheme.find({userId:id}).sort({_id:-1})
    res.json({
        posts:posts
    })
})
postrouter.get('/deletes/:id',async (req,res)=>{
    const posts = await PostScheme.deleteOne({_id:req.params.id})
    res.json({
        message:'post was dellet'
    })
})
postrouter.post('/create',async (req,res)=>{
    const {userId,userName,title,paragraph} = req.body
    await   PostScheme.create({userId:userId,comments:[],userName,title:title,paragraph:paragraph})
    res.json({messeage:'post was created'})
})
postrouter.get('/seePost/:id',async (req,res)=>{
    const id = req.params.id
    const post = await PostScheme.findById(id)
    res.json(post)
})
postrouter.get('/seePost/addComment/:id/:comment/:username',async (req,res)=>{
    const id = req.params.id
    const comment = req.params.comment
    const userName = req.params.username
    const post = await PostScheme.findById(id)
    const newComment = [
        ...post.comments,
        {userName:userName,comment}
    ]
    await PostScheme.findByIdAndUpdate(id,{comments:newComment})
    res.json({
        mes:'your comment was added'
    })
})
export default postrouter