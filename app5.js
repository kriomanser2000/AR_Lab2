function display(data, callback)
{
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt > 5? new Error("Compiling Error. randInt over 5") : null;
    setTimeout(function()
{
    callback(err, data);
}, 0);
}
console.log("Program started");
display("Processing data...", function (err, data)
{
    if(err) throw err;
    console.log(data);
});
console.log("Ending prog work.");