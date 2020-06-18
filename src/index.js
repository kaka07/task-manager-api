const express=require('express')
require('./db/mongoose')
const app=express()
const port=process.env.PORT
const userRouter=require('../src/router/user')
const taskRouter=require('../src/router/task')
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is set up at port "+port)
})