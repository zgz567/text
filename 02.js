var http=require("http")
var url=require("url")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var obj=url.parse(req.url,true).query
    console.log(url.parse(req.url,true))
    res.end("接收"+obj.username)
}).listen(3000)