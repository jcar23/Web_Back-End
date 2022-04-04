//Exe 1
function started() {
    console.log("Started Download \n")
}
function update(progress) {
    console.log(progress+"% of Download")
}
function completed() { 
    console.log("\nDownload Compleated")
}
function performDownload(started_fn, update_fn, completed_fn){
    // Chamar a função dentro de uma função
    started_fn();
    for (let index = 1; index < 100 + 1; index++){

    }
    completed_fn();
}
performDownload(started, update, completed)

/*
function started() {
    console.log("Started Download \n")
}
function update(index) {
    console.log(index+"% of Download")
}
function completed() { 
    console.log("\nDownload Compleated")
}
function performDownload(started, update, completed){
    // Chamar a função dentro de uma função
    started();
    for (let index = 1; index < 100 + 1; index++)
    update(index);
    completed();
}
performDownload(started, update, completed)
*/

/*
function started() {
    console.log("Started Download \n")
}
function update() {
    for (let index = 1; index < 100 + 1; index++) {
        console.log(index+"% of Download")
    }
}
function completed() { 
    console.log("\nDownload Compleated")
}
function performDownload(started, update, completed){
    started();
    update();
    completed();
}
performDownload(started, update, completed)*/

var arrayUtils = require("./ArrayUtils");
console.log( "This is " + arrayUtils.isEmpty([2,3]));
console.log("The max number in this array is "+ arrayUtils.max([1,2,3,4,5]));
console.log("The min number in this array is "+ arrayUtils.min([1,2,3,4,5]));
console.log("The avarage number in this array is "+ arrayUtils.average([1,2,3,4,5]));
console.log("The index of this number in this array is " + arrayUtils.indexOf([1,2,3,4,5], 5));
console.log( arrayUtils.subArray([9,8,1,2,3,4,5,7,6], 3, 5 ));
console.log( arrayUtils.isSameLength([9,8,1,2,3],[4,5,7,6]));
console.log( arrayUtils.reverse([4,5,7,6]));
console.log( arrayUtils.swap([4,5,7,6],3,1));
console.log( arrayUtils.contains([4,5,7,6,9],10));
console.log( arrayUtils.concatenate([4,5,7,6,9],[12,8,3,1]));