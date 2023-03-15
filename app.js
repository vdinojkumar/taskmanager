const connectDB=require('./db/connect')
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
require('dotenv').config()


//middelware
app.use(express.static('./public'))
app.use(express.json())

//route 

app.use('/api/v1/tasks',tasks)


const port=3000

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is Listning on the port ${port}....`))

    } catch (error) {
        console.log(error); 
    }
}

start()