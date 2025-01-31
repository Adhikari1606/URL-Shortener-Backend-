const shortid=require("shortid");
const URL=require("../models/url");
async function handleGenerateNewShortUrl(req, res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"URL is required"});
  const shortId = shortid();
  await URL.create({shortId, redirectURL: body.url,visitHistory:[]});
  return res.status(201).json({shortId});
}
async function handleGetUrlAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({totalclickes:result.visitHistory.length,analytics:result.visitHistory,});}
module.exports = { handleGenerateNewShortUrl ,handleGetUrlAnalytics};