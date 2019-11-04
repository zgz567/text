var http = require("http")
var url = require("url")
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    var aa = ("http://localhost:3000?username=zgu&username=ccc")
    if (url == "/favicon.ico") {
        return
    }
    
    console.log(url.parse(aa,true))
    // console.log(url.parse(aa, true))
    // var obj = url.format({
    //     protocol: 'http:',
    //     slashes: true,
    //     auth: null,
    //     host: 'localhost:3000',
    //     port: '3000',
    //     hostname: 'localhost',
    //     hash: null,
    //     search: '?username=zgu&username=ccc',
    //     query: 'username=zgu&username=ccc',
    //     pathname: '/',
    //     path: '/?username=zgu&username=ccc',
    //     href: 'http://localhost:3000/?username=zgu&username=ccc'
    // })
    // console.log(obj)
    res.end()
}).listen(3000,()=>{
    console.log("死几次啊检查")
})