const Config = require('./Config');
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on(Config.events.LOGIN, function(){
    console.log("Someone has logged in");
});
emtr.on(Config.events.LOGOUT,function(){
    console.log("Someone has logged out");
});

emtr.on(Config.events.knowThis,function(){
    console.log("You better learn this");
});
emtr.emit(Config.events.LOGIN)
emtr.emit(Config.events.LOGOUT)
emtr.emit(Config.events.knowThis)

