//! 1. Lesson with Youtube video

//* DOWNLOAD
//* 2.) download nodejs

//* request - response
//* Use SERVER for request and response. our first modules HTTP MODULE.
//* write "node index.js" to terminal for work

//! HTTP MODULE use

var http = require("http"); 

var forserver= http.createServer((req, res)=> {
if (req.url=="/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home</h1>"); //send content to users who request content.
}else if (req.url=="/Products") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Products</h1>");
}else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Page not Found");
}  
    res.end(); //and then we ended the content
});

forserver.listen(3001,()=>{
    console.log("node.js server at port 3001")  //Open this under port 3000. we dont know when it will open then we wrote to the user with arrow func.
}); //Open terminale and write "node nodeIndex.js".


