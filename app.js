const express = require("express");
const app = express();
app.get("/", function(request, response)
{
    response.end("Hello from Valhala");
});
app.listen(3000);