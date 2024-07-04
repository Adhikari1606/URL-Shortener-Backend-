const express=require('express');
const {connect}=require('./connection');
const urlRoute=require('./routes/url');

const app=express();
const PORT=3000;
connect("mongodb://localhost:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{  
    console.log("Error connecting to MongoDB",err);
});
app.use("/url",urlRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});