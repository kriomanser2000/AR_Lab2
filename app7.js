const fs = require("fs");
fs.readFile("hello.txt", "utf8", 
    function(error, data)
    {
        console.log("Async reading from file");
        if(error) throw error;
        console.log(data);
    });
console.log("Sync reading from file")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);