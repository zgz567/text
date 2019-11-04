var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/"){
        fs.readFile("./01.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/bbb"){
        fs.readFile("./02.html",function(err,data){
            res.end(data)
        })
    }else{
        fs.readFile("./03.html",function(err,data){
            res.end(data)
        })
    }
}).listen(3000,function(){
    console.log("挂起")
})