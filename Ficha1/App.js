// Exercicio 5
function calculatesMyGrades(firstgrade, secondgrade){
    var myGrades = firstgrade * 0.7 + secondgrade * 0.3
    console.log('A sua nota foi' + myGrades)
    if (myGrades < 9.5){
        console.log('Repproved')
    } else {
        console.log('Approved')
    }
}
calculatesMyGrades(12, 8)

//
function monthName(monthNumber){
    if (monthNumber == 1){
        console.log('Janeiro')
    } 
    else if (monthNumber == 2){
        console.log('Fevereriro')
    } 
    else if (monthNumber == 3){
        console.log('Março')
    }
    else if (monthNumber == 4){
        console.log('Abril')
    }
    else if (monthNumber == 5){
        console.log('Maio')
    }
    else if (monthNumber == 6){
        console.log('Junho')
    }
    else if (monthNumber == 7){
        console.log('Julho')
    }
    else if (monthNumber == 8){
        console.log('Agosto')
    }
    else if (monthNumber == 9){
        console.log('Setembro')
    }
    else if (monthNumber == 10){
        console.log('Outubro')
    }
    else if (monthNumber == 11){
        console.log('Novembro')
    }
    else if (monthNumber == 12){
        return 'Dezembro'
    }
    else{
        console.log('Opção Invalida, tente de novo')
    } 
}
console.log(monthName(12))


//exercicio 7

function calculoAritmeticos(v1,v2,op){
    if (op == '+'){
        console.log(v1+v2)
        return v1 + v2
    }else if (op == '-'){
        console.log(v1-v2)
        return (v1 - v2)
    }else if (op == '*'){
        console.log(v1*v2)
        return v1 * v2
    }else if (op == '/'){
        console(v1/v2)
        return v1 / v2
    }else if (op == '^'){
        console.log(Math.pow(v1,v2))
        return Math.pow(v1,v2)
        
    }else{
        console.log('Error, try again')
    }
}
console.log(calculoAritmeticos(2,2,'^'))



// Exercicio 8
function firstOneHundredNumbers(n){
    var soma=0
    for (var number = 1; number <= n; number++){
        soma += number
    }   
    console.log(soma)
}
firstOneHundredNumbers(100)

// Exercicio 9
function multiplo(limit){
    for (var i = 1; i <= limit; i++){
        if (i % 5 === 0)
        console.log('Multiplo de 5 é ' + i)
    }
}
multiplo(30)

// Space

function multi(mul,lim){
    var result = 0
    while(result < lim){
        result+=mul
        console.log(result)
    }
}
multi(5,20)

// Exercicio 10
function fatorial(f){
    var passo = 1
    for (var i = 1; i <= f; i++){
        passo = passo * i
        console.log(passo)
    }
}
fatorial(5)

function maxMinMed(array){
    var max = array[1]
    var min = array[2]
    var med = null
    for (var i = 0; i < array.length; i++){
        if (max < array[i]){
            max = array[i]
        }
        if (min > array[i]){
            min = array[i]
        }
        med += array[i] 
    } 
    med /= array.length
    console.log("O valor max e " + max)
    console.log("O valor min e " + min)
    console.log("O valor med e " + med)
    console.log('O tamanhgo é ' + array.length)
}
maxMinMed([7,9,11,2,3])

// media
function media(){
    var array = [1,3,5,6,8,9]
    var soma = 0
    for (var i= 0; i < array.length; i++) {
        soma += array[i]
    }
    var media = soma/array.length
    console.log(media)
    return media    
} 
media()




