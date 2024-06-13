const http = require("http");
http.createServer(function(request, response)
{
    const fs = require("fs");
    let writeableStream = fs.createWriteStream("hello.txt");
    writeableStream.write("Hail Wotan!");
    writeableStream.write("Wordl Wide \n");
    writeableStream.end("Write ending");
    let readableStream = fs.createReadStream("hello.txt", "utf8");
    readableStream.on("data", function(chunk)
{
    console.log(chunk);
})}).listen(3000);