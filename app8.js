/*
const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function()
{
    console.log("Hello all!");
});
emitter.on(eventName, function()
{
    console.log("Hello!");
});
emitter.emit(eventName);
*/

const util = require("util");
const EventEmitter = require("events");

function User()
{

}
util.inherits(User, EventEmitter);
let eventName = "greet";
User.prototype.sayHi = function(data)
{
    his.emit(eventName, data);
}
let user = new User();
user.on(eventName, function(data)
{
    console.log(data);
});
user.sayHi("sedokfn");