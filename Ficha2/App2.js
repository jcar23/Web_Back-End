// Exe 1
function imccalculos(peso,altura){
   var imc= peso/((altura)^2)
   if (imc < 18.5){
       console.log('Abaixo do Peso')
   }
   else if (imc>18.5 && imc < 25){
       console.log('O seu peso Normal' )
   }
   else if (imc>=25 && imc<=30){
       console.log('Acima do peso')
   }
   else if ( imc > 30){
       console.log('Bem Bem acima do peso')
   }
   else{
       console.log('Peso incorrecto')
   }
}
imccalculos(80, 1.45)

//Exe2
function reverse(str){
    var splittedStr = str.split(" "); // o split conta palavras
    var reversedStr = " ";
    for (let j = 0; j < splittedStr.length; j++){
        var word = splittedStr[j];
        //console.log(splittedStr[0]) // splitedStr[j] vai buscar cado uma palavras na frase.
        for (var i = word.length - 1; i >= 0; i--){// vai buscar cada uma letra dessa palavras de tras para frente.
            reversedStr += word[i];
            //console.log(word[0])  
        }   
        reversedStr +=" ";
    }return reversedStr;
}
var str = reverse("Hoje é Domingo");
console.log(str)



/*const vogal = ['A','a','E','e','I','i','O','o','U','u']
function vogalcounter(phrase){
    var count = 0
    for( i= 0; i < vogal.length; i++){
        if (vogal.includes(phrase[i])){
            count++
        }
    }return console.log(''+ count)
}
vogalcounter('AEIOUaeiou')
*/

//  splittedphrase = str.split(" ");


function vogalCounter(phrase){
    var count = 0;
    for (var i = 0; i < phrase.length; i++){
        if ( 
            phrase[i] == 'A' || phrase[i] == 'a' 
            || phrase[i] == 'E' || phrase[i] == 'e'
            || phrase[i] == 'I' || phrase[i] == 'i'
            || phrase[i] == 'O' || phrase[i] == 'o'
            || phrase[i] == 'U' || phrase[i] == 'u'){
            count++;
        }
    }
    return count;
}
console.log(vogalCounter('aeiouAEIOU'));



    /*if (vogal ==A && vogal ==a){

        }
        if (vogal == E && vogal == e){
            i = 1
        }
        if (vogal == I && vogal == e){
            i = 1
        }
        if (vogal== O && vogal == o){
            i = 1
        }
        if (vogal == U && vogal == u){
            i = 1
        }
    }return reversedStr;
    
   
}
var Phrase = phrasenumber("I am the one")
*/

function letterRepeatingTime(str, letter){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == letter){
            count++;
        }
    }
    return count;
}
console.log(letterRepeatingTime('Hello world', 'o', 'a'));


//Exercicio 5

function calculateTime(HoraE, MinE, SecE, HoraS, MinS, SecS){
    var totalTimeEs = HoraE * 3600 + MinE * 60 + SecE; // hora de entrada multiplicando por 1h convertida em segundos, + os minutos e os segundos (valor em segundos)
    console.log("\n" + totalTimeEs);
    var totalTimeSs = HoraS * 3600 + MinS * 60 + SecS; // hora de saida multiplicando por 1h convertida em segundos, + os minutos e os segundos (valor em segundos)
    console.log(totalTimeSs+"\n"  );
    var diffInSeconds = totalTimeSs - totalTimeEs; // subtração de total da hora de saida pela hora de entrada (valor em segundos)
    console.log(diffInSeconds);

    var hours = Math.floor((diffInSeconds / 3600)); // converte o valor(da subtração) de segundos para horas
    console.log(hours) 
    var reminderHours = (diffInSeconds % 3600); // O resto da divisão  por 3600 da hora de converte os resto das horas em 
    console.log(reminderHours+ '\n')
    var minutes = Math.floor((reminderHours / 60)); // converter o valor(da subtração) de segundos para horas
    var seconds = reminderHours % 60; 

    
    console.log('Trabalhou ' + hours + 'h:' + minutes + 'm' + seconds + 's' );
};
calculateTime(8, 2, 2, 15, 0, 0)


// exercicio 6
function calculateWidthHeight(width, height){
    var line = " ";
    for (let k = 0; k < height; k++){ // o let é so usado para o ciclo for
        line +='*'
    }
    for (var i = 0; i < width/*width é o length*/ ; i++){
        console.log(line)
    }

    
}
calculateWidthHeight(5, 5)

/*
function drawSquare(height,width){
    var squareDrawn = '';
    var pointsInSquare = height * width;
    var iWidth = 0;
    for (var i = 1; i <= pointsInSquare; i++){
        if (iWidth == width){
            squareDrawn = squareDrawn + '\n*'
            iWidth = 1
        }
        else {
            squareDrawn = squareDrawn + '*'
            iWidth++
        }
    }
    return squareDrawn
}
*/
/*
function triangle(height){
    var line= '*'
    for (let i= 0; i <height; i++){
        console.log(line)
        line += "*"   
    }
}
triangle(3)
*/
function box (width,height){

    for (let i = 0; i < height; i++){
        var line = '';
        for (let j = 0; j < width; j++){
            if (i ==0 || i == height - 1 ){
                line+= '*' ;
            }
            else{
                if (j == 0 || j == width -1){
                    line += '*';
                }
                else{
                    line += ' ';
                }
            }
        }   
        console.log(line)
    }
    
}   
box (6,6)


/*
function box (width,height){
    for (let i = 0; i < height; i++){
       
        for (let j = 0; j < width; j++){
            console.log('i:' + i + 'j:' + j)
        }   
    
    }
    
}   
box (3,3) */

var studentOne = {
    number: 100,
    grade: 15
}
var studentTwo = {
    number: 101,
    grade: 16
}
var studentThree = {
    number: 102,
    grade: 17
}
var studentFour = {
    number: 103,
    grade: 18
}
var students = [];
for (let i = 0; i < 10; i++){
    var student = {
        number: Math.ceil(Math.random()* 100),
        grade: Math.ceil(Math.random() * 20)
    }
}

students.push(studentOne)
students.push(studentTwo)
students.push(studentThree)
students.push(studentFour)
//console.log(student[0])
console.log(students[0].number)


function listStudents(students){
    for ( let i = 0; i < students.length; i++){
        var student = students[i];
        console.log("Number: " + student.number + ", Grade: " + student.grade)
    }
}

function bestGrade(students){
    var max = students[0]

}

function main(students, option){
    var option = 1;
    switch (option)  {
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students)
            break;

        case 3:
            worstGrade(students)
            break;

        case 4: 
            avaregeGrade(students)
            break;

        default:
            break;
    }
}
main(students, 1); // mudar para o case 2