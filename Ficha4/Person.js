function Person(firstName, lastName) {
    this.firstName = firstName ;
    //this.propiadade = argumento
    // chave = argumento
    this.lastName = lastName ;
    }   

Person.prototype.greet = function () {
    console.log ("Hello, my name is " + this.firstName + ' ' + this.lastName + ', I am ' + this.age + " years old");
}
Person.prototype.age = 0;


var john = new Person ("John", "Doe");
john.age = Math.ceil(Math.random()*30);
john.greet();

var carla = new Person ("Carla", "Fox");
carla.age = Math.ceil(Math.random()*30);
carla.greet();

var Emma = new Person ("Emma", "Smith Stone");
Emma.age = Math.ceil(Math.random()*30);
Emma.greet();

console.log(john.__proto__);
console.log(carla.__proto__);
console.log(john.__proto__ == carla.__proto__);



