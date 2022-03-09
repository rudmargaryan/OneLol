import express from 'express'
import session from 'express-session'
import loginrouter from './routes/users/loginrouter.js'
import config from 'config'
import mongoose from 'mongoose'
import LoginScheme from './models/LoginScheme.js'
import postrouter from './routes/users/postrouter.js'

const app = express()
const PORT = config.get('port') || 5000


//middlewair

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use(
    session({
      secret: 'your secret key',
      saveUninitialized: true,
    })
  )

app.use('/user',loginrouter)
app.use('/api',postrouter)

async function StartApp(){
  try{  
    await mongoose.connect(config.get('mongoUrl'),{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
  app.listen(PORT,()=>console.log(`server was been started on port ${PORT}`))
  }catch(e){
    console.log(e)
    process.exit(1)
  }
}
app.get('/ddd', async (req,res)=>{
  const users = await LoginScheme.find()
  console.log(users)
  res.json([
    ...users
  ])
})
StartApp()

