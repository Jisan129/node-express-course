const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const data=req.query
    console.log(method,url,data)
    next()
}
module.exports=logger