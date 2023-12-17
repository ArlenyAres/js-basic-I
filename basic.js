//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5");


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
const apellido = "Medina"; //String
let nombre = "Ares"; //String
let num = 1234; // number
var verdadero = true; // boleano
var falso = false; // boelano
let arrayList = ["fuego",2,"queso", 90006]; //array
let nulo= null;
var usuario = {nombre:"arleny", apellid: "Medina", edad: 38, ciudad:"Barcelona" };
let x; // undefined

console.log(apellido);
console.log(nombre); 
console.log(num);
console.log(verdadero);
console.log(falso);
console.log(arrayList);
console.log(nulo);
console.log(usuario);
console.log(x);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres= ["helado","tarta", "pastel"];
console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
 const coder = {nombre: "Maia", edad:8};
 console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(nombre + " " +apellido + " " + num + " " +verdadero + " " +falso + " " + arrayList + " " + nulo + " " + usuario + " " + x + " " + postres + " " + coder);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero = 4; 
let numero3= 7;

console.log("resultado = "+ (numero3 + numero));

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero2 = 15; 
let numero1= 19;

console.log("resultado = "+ (numero2 - numero1));

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero4 = 50; 
let numero5= 14;

console.log("resultado = "+ (numero4 * numero5));


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero6 = 50;
let numero7 = 799;

console.log("resultado = "+ (numero6 / numero7));




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let comp1 = 1;
let comp2 = 2;

if(comp1 == comp2){
    console.log("son iguales");
}else{
    console.log("no son iguales")
}



// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let comp3 = 3;
if(comp2 == comp3){
    console.log("son iguales");
}


//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20
if (num1 >= num2){
    comparision;
}

let comparision = true;//Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparision)

//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"
num3 ? num3AsString :result;

let result = false; //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 

//Ejercicio 13: completa el ejercicio

num3 === num3AsString ? result2 : result;

let result2 = true; //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre2 = "Arleny";
let apellido2 = "Medina";
console.log(nombre2 + " " + apellido2);




//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)
