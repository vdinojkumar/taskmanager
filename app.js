const express=require('express')
const app=express()


//route 
app.get('/hello',(req,res)=>{
res.send("Task manger")
})




const port=3000

app.listen(port,console.log(`Server is Listning on the port ${port}....`))