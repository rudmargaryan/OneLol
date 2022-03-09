import { raw, Router } from "express";
import LoginScheme from "../../models/LoginScheme.js"
import bcrypt from 'bcryptjs';

const loginrouter = new Router()

loginrouter.get('/login',async(req,res)=>{
    if(req.session.user === undefined){
         res.json({
            value:false
        })
    }else{
        try{
            const search =  await LoginScheme.find({name:req.session.user.name})
            if(search){
                const passwordcheck = search[0].password
                if(bcrypt.compare(req.session.user.password, passwordcheck)){
                    return res.json({
                        value:true,
                        name:search[0].name,
                        userId:search[0]._id
                    })
                }else{
                    return res.json({
                        value:false
                    })
                }
            }
        }catch(e){
            return res.json({
                massage:`error ${e}`
            })
        }
         
    }
   
})
loginrouter.post('/log',async (req,res)=>{
    try{
        const search =  await LoginScheme.find({name:req.body.name})
        if(search){
            const passwordcheck = search[0].password
            if(await bcrypt.compare(req.body.password, passwordcheck)){
                req.session.user={
                    name:search[0].name,
                    password:search[0].password
                }
                return res.status(200).json({
                    value:true,
                    name:search[0].name,
                    userId:search[0]._id
                })
            }else{
                return res.status(404).json({s})
            }
          
        }else{
            return res.json({
                value:false,
                message:'user not found'
            })
        }
    }catch(e){
        return res.json({
            massage:`error ${e}`
        })
    }
   
})
loginrouter.post('/reg',async (req,res)=>{
    try{
        const {name,password} = req.body
        const search =  await LoginScheme.find({name:name})
        if(search.length === 0){
            const hashPassword=await bcrypt.hash(password, 7)
            await LoginScheme.create({name:name,password:hashPassword}) 
        }else{
            console.log(search)
            return res.json({
                text:'this name arleady taken'
            })
        }

        req.session.user=undefined

        res.json({
            text:''
        })

        }catch(e){
        res.json({
        text:`Error ${e}`
    })
    }
    
})
loginrouter.get('/logout',(req,res)=>{
    req.session.user=undefined
    res.status(200).json({
        message:'was deleted'
    })
})
export default loginrouter