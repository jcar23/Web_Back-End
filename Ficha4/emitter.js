class Emitter{
    constructor(){
        this.events = {};       
    }
}
//this.events.["login"] = []; colocar o nome da propiedade como uma string
//herança prototypada
// implementeção da função on

Emitter.prototype.on = function(type,listener){
    if(this.events[type] == undefined){ // para verificar se a propriedade existe ou n
        this.events[type] = [];
    }
    this.events[type].push(listener);
};
//Emitter.on ("login", function(){});
//Emitter.on ("logout", function(){})

// é um array que esta dentro de uma propriedade que esta dentro de um array
Emitter.prototype.emit = function(type){
    if(this.events[type] != undefined){
        this.events[type].forEach(element => {
            element();
        });
    }
};
module.exports = Emitter;