const express=require('express');
const {handleGenerateNewShortUrl,handleGetUrlAnalytics}=require('../controllers/url');
const router=express.Router();


router.post('/',handleGenerateNewShortUrl);

router.get('/analystics/:shortId',handleGetUrlAnalytics);

module.exports=router;