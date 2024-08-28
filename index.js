const express = require('express')
const cors =require('cors')
const app =express()
const port = process.env.PORT || 5000;
app.use(cors())

app.get('/',(req,res)=>{
  res.send('server up and running')
})
app.listen(port,()=>{
  console.log('server up and running on port',port);
})

const courses=require('./data/courses.json')
app.get('/courses',(req,res)=>{
  res.send(courses)
})

app.get('/course/:id',(req,res)=>{
  const id=req.params.id
  const selectedCourse= courses.find(c=>c.id==id)
  console.log(selectedCourse);
  res.send(selectedCourse)
})

app.get('/checkout/:id',(req,res)=>{
  const id=req.params.id
  const selectedCourse= courses.find(c=>c.id==id)
  console.log(selectedCourse);
  res.send(selectedCourse)
})