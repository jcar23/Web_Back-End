var person1 = {
    name:"Carl",
    age: Math.ceil(Math.random()*100),
    gender: "M",
}
var str = JSON.stringify(person1)
console.log(str)

var person2 = '{"name":"Carl","age": "20","gender":"M"}';
var str = JSON.parse(person2)
console.log(str)

