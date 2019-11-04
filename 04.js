var path=require("path")
var url=require("url")
// console.log(path.resolve("E:\最后阶段","/aa"))
// console.log(path.isAbsolute("E:\最后阶段"))
// console.log(path.join("E:\最后阶段","aa","bb"))
// console.log(path.dirname("E:/aaa/bbb"))
// console.log(path.relative("/aa"))
// console.log(path.extname("E:\最后阶段\aa.sss"))
// var obj=url.format({
//     a:1,
//     b:2
// })
// console.log(obj)
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
  // 打印 #bar

myURL.hash = 'baz';
console.log(myURL.href);
