
// 1. Realizar una página que muestre el mensaje "Bienvenido" al entrar en la página (ver evento onload en javascript)

function mensaje(){
    alert("Bienvenido")
}


// 2. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

function months(){
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);
alert(meses)
}

// 3. El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120  ; Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

function factor(){

let dato;

dato = prompt("Introducir número para conocer su factorial","")

let resultado = dato; 

for (i=dato-1; i>=1; i--){
    resultado = resultado * i;
} alert("El factorial de " + dato + " es: " + resultado);
    console.log(resultado);
}
// 4. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function par(){

let numero;

numero = prompt("Ingrese el valor del número para saber si es par o impar: ", "")

if (numero % 2 === 0){
    alert("El numero " + numero + " es par")
} else {
    alert("El numero " + numero + " es impar")
}
}
// 5. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function cadenaMayus(){
let string = prompt("")

string = string.toUpperCase();
console.log(string);
alert(string)
}

function cadenaMin(){
    let string = prompt("")
    
    string = string.toLowerCase();
    console.log(string);
    alert(string)
}


// 6. A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
// - Determinar cual de los dos elementos de texto es mayor
// - Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
// - Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos




let valores = [true, 5, false, "'Hola'", "'Adios'", 2];



// CUAL DE LOS DOS ELEMENTOS ES MAYOR

let pal1 = valores[3]
let pal2 = valores[4]

if (pal1.length > pal2.length){
    console.log(pal1, "es una palabra mas larga que ", pal2);
} else {
    console.log(pal2,  "es una palabra mas larga que ", pal1);
}



// Determinar los operadores necesarios para obtener un resultado true y otro resultado false

let num1 = valores[1]
let num2 = valores[5]

x = num1 < num2;
console.log ("El número ", num1, "es menor que el numero 2: ", x);


y = pal1.length < pal2.length;
    console.log("La longitud de la palabra 'Hola' es menor que 'Adios': ", y);




// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

console.log(num1+num2, num1-num2, num1*num2, num1/num2);