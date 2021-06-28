const express=require('express')
const app = express();
const path = require('path');
const {products,people}=require('./data')
const logger = require('./logger')

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}))
app.use([logger])


app.get('/',(req,res)=>{
    console.log('NO More ')
    res.send('<h1>Middleware</h1>')
})

app.get('/api/people',(req,res)=>{
    res.json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const { name }=req.body
    res.send({success:false,person:name})
})



app.get('/hello',(req,res)=>{
    console.log('No')
    res.sendFile('index.html',{root:"methods-public"})
})


 app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        return res.status(200).send(`<h1>Every One is Alright ${name} </h1>`)
    }
    res.send("Please Do your job properly")

})


app.listen(5000)