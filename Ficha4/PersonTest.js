function Person(firstName,lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}
Person.prototype.greet = function(){
    console.log("Hello Cruel World, I am " + this.firstName + this.lastName + ", My age is " + this.age)
}
Person.prototype.age = 0;

var firstPerson = new Person ("Filipe"," Fox")
firstPerson.age = Math.ceil(Math.random()*30)
firstPerson.greet()

var secondPerson = new Person ("Emma"," Axx")
secondPerson.age = Math.ceil(Math.random()*65)
secondPerson.greet()

console.log(firstPerson.__proto__);
console.log(secondPerson.__proto__);
console.log(firstPerson.__proto__ == secondPerson.__proto__)
