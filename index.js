const express=require('express');
const {connect}=require('./connection');
const urlRoute=require('./routes/url');
const URL=require('./models/url');

const app=express();
const PORT=8000;
connect("mongodb://localhost:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{  
    console.log("Error connecting to MongoDB",err);
});
app.use(express.json());
app.use("/url",urlRoute);
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry =await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}});
    res.redirect(entry.redirectURL);
    });
  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});