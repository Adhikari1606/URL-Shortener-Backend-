const {nanoid}=require("shortgit");
const URL=require("../models/url");
async function handleGenerateNewShortUrl(req, res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"URL is required"});
  const shortId = nanoid(6);
  await URL.create({shortId, redirectURL: body.url,visitHistory:[]});
  return res.status(201).json({shortId});
}
module.exports = { handleGenerateNewShortUrl };