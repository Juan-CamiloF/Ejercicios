//------------EJERCICIO 1------------

//Saber si una frase es palindromo o no
function Palindrome(str) {
  //Limpiar la cadena
  let accents = ["á", "é", "í", "ó", "ú"];
  let string = str.toLowerCase().split("");
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " " || string[i] == "," || string[i] == ".") {
        continue;
    } else if (string[i] == accents[0]) {
      newString += "a";
    } else if (string[i] == accents[1]) {
      newString += "e";
    } else if (string[i] == accents[2]) {
      newString += "i";
    } else if (string[i] == accents[3]) {
      newString += "o";
    } else if (string[i] == accents[4]) {
      newString += "u";
    } else {
      newString += string[i];
    }
  }
  //Invertir la cadena
  let newStringReverse="";
  //Conseguir el String en reversa
  for (let i = newString.length - 1; i >= 0; i--) {
      newStringReverse += newString[i];
  }
  //Comparar las 2 cadenas la invertida y la normal
  let isPalindrome = false;
  for (let j = 0; j < newString.length; j++) {
      if(newString[j]==newStringReverse[j]){
          isPalindrome = true;
      }else isPalindrome = false;
  }
  console.log(isPalindrome);
}

//Pruebas unitarias de la funcion palindromo
Palindrome("A mamá, Roma le aviva el amor a papá y a papá, Roma le aviva el amor a Mamá."); // == True
Palindrome('Allí va Ramón y no maravilla.') // == True
Palindrome('Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida') // == True
Palindrome('Ají traga la lagartija'); // == True
Palindrome('Allí va Ramón y no maravilla.');
Palindrome('Esto no es un palindromo o eso creo, ah no ya mire y no'); // == False
Palindrome('Este tampoco'); // == False

// ------------EJERCICIO 2------------

// En esta pequeña tarea, se le da una cadena de números separados por espacios
// y debe devolver el número más alto y el más bajo.

function numbers(n){
    let numbers = n.split(' ');
    let arrayNumber = [];
    //Convertir la cadena en números
    for (let i = 0; i < numbers.length; i++) {
        arrayNumber[i]=parseInt(numbers[i]);
    }
    //Hallar el número mayor
    let numeroMayor =-1000;
    for (let j = 0; j < arrayNumber.length; j++) {
        if(arrayNumber[j]>numeroMayor){
            numeroMayor = arrayNumber[j];
        }
    }
    //Hallar el número menor
    let numeroMenor = 1000;
    for (let k = 0; k < arrayNumber.length; k++) {
        if(arrayNumber[k] < numeroMenor){
            numeroMenor = arrayNumber[k];
        }
    }
    console.log('Numero menor', numeroMenor,'Numero mayor',numeroMayor)

}
numbers('1 2 3 4 5') // == (1,5)
numbers('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') // == (-214,542)
numbers('1 9 3 4 -5') // == (-5,9)
numbers('1 2 -3 4 5') // == (-3,5)

// ------------EJERCICIO 3------------

// Halle la sucesión de Fibonacci a partir de un número dado
function fibonacci(n) {
    //Hacer una arreglo con los 2 primero número de la secuencia
    let array = [0,1];
    //Recorrer el tamaño ingresado y empezar a sumar los números anteriores
    for (let j = 2; j < n; j++) {
        array[j]=(array[j-1]+array[j-2]);
    }
    console.log(array)
}
//Pruebas unitarias de fibonacci
fibonacci(5) // == [0, 1, 1, 2, 3]
fibonacci(8) // == [0, 1, 1, 2, 3, 5, 8, 13]
fibonacci(2) // == [0, 1]
fibonacci(4) // == [0, 1, 1, 2]

// ------------EJERCICIO 4------------

// Hay una guerra y nadie lo sabe: ¡la guerra del alfabeto!
// Hay dos grupos de cartas hostiles. La tensión entre las letras del lado izquierdo y
// las letras del lado derecho era demasiado alta y comenzó la guerra.
// Escribe una función que acepte cadena de pelea que consta solo de letras minúsculas y devuelve quién gana la pelea.
//  Cuando el lado izquierdo gana, regresa ¡El lado izquierdo gana !, cuando el lado derecho gana, regresa ¡El lado derecho gana!
// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// Funcion del ganador
function winner(str){
    //Marcador inicial de la batalla
    let right = 0;
    let left = 0;
    //Convertir la cadena en array
    let string = str.split('');
    //Recorrer el array y ir sumando los puntos a cada lado
    for (let i = 0; i < string.length; i++) {
        //Lado izquierdo
        if(string[i]=='w') left += 4;
        if(string[i]=='p') left += 3;
        if(string[i]=='b') left += 2;
        if(string[i]=='s') left += 1;
        //Lado derecho
        if(string[i]=='m') right += 4;
        if(string[i]=='q') right += 3;
        if(string[i]=='d') right += 2;
        if(string[i]=='z') right += 1;
    }
    //Dar el resultado final
    if(left>right){
        console.log('Gano izquierda con: ', left);
    }else if(left==right){
        console.log('Empate');
    }
    else{
        console.log('Gano derecha con: ', right)
    }
}
// Pruebas Unitarias
winner('z') // == Gana derecha con : 1
winner('zdqmwpbs') // == Empate
winner('zzzzs') // == Gano derecha con : 4
winner('wwwwwwz') // == Gano izquierda con: 24;

// ------------EJERCICIO 5------------

// En este kata se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

// Si algo en el texto no es una letra, ignórelo y no lo devuelva.

// "a" = 1, "b" = 2, etc.

function kata(str) {
  let string = str.toLowerCase().split("");
  let cadenaInicial = "";
  let objectLetterAndValue = [
    { letter: "a", value: "1" },
    { letter: "b", value: "2" },
    { letter: "c", value: "3" },
    { letter: "d", value: "4" },
    { letter: "e", value: "5" },
    { letter: "f", value: "6" },
    { letter: "g", value: "7" },
    { letter: "h", value: "8" },
    { letter: "i", value: "9" },
    { letter: "j", value: "10" },
    { letter: "k", value: "11" },
    { letter: "l", value: "12" },
    { letter: "m", value: "13" },
    { letter: "n", value: "14" },
    { letter: "o", value: "15" },
    { letter: "p", value: "16" },
    { letter: "q", value: "17" },
    { letter: "r", value: "18" },
    { letter: "s", value: "19" },
    { letter: "t", value: "20" },
    { letter: "u", value: "21" },
    { letter: "v", value: "22" },
    { letter: "w", value: "23" },
    { letter: "x", value: "24" },
    { letter: "y", value: "25" },
    { letter: "z", value: "26" }
  ];

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < objectLetterAndValue.length; j++) {
      if (string[i] == objectLetterAndValue[j].letter) {
        cadenaInicial += objectLetterAndValue[j].value +" ";

      }
    }
  }
  let cadenaFinal = cadenaInicial.trim()
  console.log(cadenaFinal);
}
//Pruebas Unitarias
kata("The sunset sets at twelve o' clock."); //== 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
kata("6w=cr kg"); // == 23 3 18 11 7
kata("The narwhal bacons at midnight."); // == 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20
kata("c?0h+874"); // == 3 8

// ------------EJERCICIO 5------------

// Dada una matriz de números enteros, elimine el valor más pequeño.
// No mute la matriz / lista original. Si hay varios elementos con el mismo valor,
// elimine el que tenga un índice más bajo. Si obtiene una matriz / lista vacía,
// devuelva una matriz / lista vacía.
// No cambie el orden de los elementos que quedan.

function deleteSmaller(arr) {
    let smallNumber = 10000
    let position = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<smallNumber){
            smallNumber = arr[i];
            position = i;
        }
    }
    let newArray= [];
    for(let j=0; j<arr.length;j++){
        if(j!=position){
            newArray.push(arr[j]);
        }
    }
    console.log(newArray)
}
deleteSmaller([1,2,3,4,5]) // == [2, 3, 4, 5]
deleteSmaller([5, 3, 2, 1, 4]) // == [5, 3, 2, 4]
deleteSmaller([2, 2, 1, 2, 1]) // == [2, 2, 2, 1]
deleteSmaller([0,1]) // == [1]
deleteSmaller([]) // == []

// ------------EJERCICIO 6------------

// Complete el método / función para que convierta las palabras delimitadas por guiones /
// subrayados en mayúsculas y minúsculas.
// La primera palabra dentro de la salida debe escribirse en mayúscula solo
// si la palabra original estaba en mayúscula (conocida como mayúsculas y minúsculas,
// también conocida como mayúscula Pascal).

function toCamelCase(str) {
    let string = str.split('');
    //Detertar si hay raya al piso o guion
    let cad = "";
    for (let i = 0; i < string.length; i++) {
        if(string[i] == '_' || string[i] == '-'){
            string.splice(i,1);  //Quitar el guion o raya al piso
            string[i]=string[i].toUpperCase(); //Poner en mayuscula la siguiente letra
        }

    }
    //Convertir el array en una adena
    for (let j = 0; j < string.length; j++) {
        cad+=string[j];
    }
    console.log(cad)
}
//Prueba unitarias
toCamelCase("the-stealth-warrior") // == theStealthWarrior
toCamelCase("the_stealth_warrior") // == theStealthWarrior
toCamelCase("el_juan_maravilla") // == elJuanMaravilla
toCamelCase("El-juan-maravilla") // == ElJuanMaravilla

// ------------EJERCICIO 7------------

// Hacer multiplicaciones sin el signo de multiplicar

function multiply(number1,number2){
    let result = 0;
    let signo = Math.sign(number2);
    for (let i = 0; i < number1; i++) {
        result = signo = 1 ? result+number2 : result-number2
    }
    console.log(result)
}
multiply(5,4) // == 20
multiply(4,-4) // == -16
multiply(5,0) // == 0
multiply(10,5) // == 50

// ------------EJERCICIO 8------------

// Limpiar un arreglo de undefine,0,null,false sin modificar el arreglo principal

function clean(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]){
           newArray.push(arr[i]);
       }
    }
    console.log('Array original: ',arr,'\n','Array limpio',newArray)
}

clean([1,2,false,undefined,3,'Hola',null]); // == [1, 2, 3, "Hola"]
clean([1,2,3,4,5,null,null,null]); // == [1, 2, 3, 4, 5]
clean([undefined,0,null,false]) // == []

// ------------EJERCICIO 9------------

// Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado.

// Debería eliminar todos los valores de la lista a, que están presentes en la lista b.

// arrayDiff ([1,2], [1]) == [2]
// Si un valor está presente en b, todas sus ocurrencias deben eliminarse del otro:

// arrayDiff ([1,2,2,2,3], [2]) == [1,3]

function arrayDiff(arrA, arrB) {
  for (let b = 0; b < arrB.length; b++) {
    for (let a = 0; a < arrA.length; a++) {
        if(arrA[a]==arrB[b]){
            arrA.splice(a,1);
            a--;
        }
    }
  }
  console.log(arrA);
//   console.log(newArray);
}

arrayDiff([1, 2, 3], [1,2]); // == [2]
arrayDiff([-3,-1,-13,-15,14,3,2,15],[-1,14,-3]) // == [-13, -15, 3, 2, 15]
arrayDiff ([1,2,2,2,3], [2]); // == [1,3]

// ------------EJERCICIO 10------------

// Escriba una función en WeirdCase (raro en Ruby) que acepte una cadena y
// devuelva la misma cadena con todos los caracteres indexados pares en cada
// palabra en mayúsculas y todos los caracteres impares indexados en cada palabra en minúsculas.
// La indexación que se acaba de explicar se basa en cero, por lo que el índice cero-ésimo es par,
// por lo tanto, ese carácter debe ir en mayúsculas.

// La cadena pasada solo constará de caracteres alfabéticos y espacios ('').
// Los espacios solo estarán presentes si hay varias palabras.
// Las palabras estarán separadas por un solo espacio ('')

function toWeirdCase(str) {
        let array = str.split(' ');
        let array2 = [];
        let cad = "";
        for (let i = 0; i < array.length; i++) {
            array2 = array[i].split('');
            for (let j = 0; j < array2.length; j++) {
                if(j%2==0){
                    array2[j]=array2[j].toUpperCase();
                }
                cad+=array2[j]
            }
            cad+=" "
        }
        console.log(cad.trim())

}
toWeirdCase("String is a test") // == StRiNg Is A TeSt
toWeirdCase("Looks like you passed") // == LoOkS LiKe YoU PaSsEd
toWeirdCase("ThIs Is ThE FiNaL TeSt CaSe") // == ThIs Is ThE FiNaL TeSt CaSe
toWeirdCase("Ok FiNe YoU ArE DoNe NoW") // == Ok FiNe YoU ArE DoNe NoW

// ------------EJERCICIO 11------------

// Escribe una función que acepte una secuencia de números y calcule la varianza de la secuencia.

// La varianza para un conjunto de números se encuentra restando la media de cada valor, elevando al cuadrado los resultados,
// sumándolos todos y dividiendo por el número de elementos.

// Por ejemplo, en pseudocódigo, para calcular la varianza de [1, 2, 2, 3].

// media = (1 + 2 + 2 + 3) / 4
// => 2

// varianza = ((1 - 2) ^ 2 + (2 - 2) ^ 2 + (2-2) ^ 2 + (3 - 2) ^ 2) / 4
// => 0,5

function variance (arr){
    //Hallar la media del arreglo
    let mean = 0;
    for (let i of arr) {
        mean+=i;
    }
    mean/=arr.length;
    //Hallar la varianza del arreglo
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log()
        result+= (arr[i]-mean)**2;
    }
    result/=arr.length;
    console.log('Media: ',mean,'\n','Varianza: ',result);

}
variance([1, 2, 2, 3]); // == 2 , 0.5
variance([-10, 0, 10, 20, 30]); // == 10 , 200
variance([8, 9, 10, 11, 12]); // == 10 , 2

// ------------EJERCICIO 12------------

// Se le dará un número y deberá devolverlo como una cadena en forma expandida. Por ejemplo:
// 12 = '10 + 2'
// 42 = '40 + 2'
// 70304 = '70000 + 300 + 4'

function expandedForm(n){
    // Convertir el número en una cadena
    let numberString = n.toString();
    // La cadena convertida en un array
    let numberArray = numberString.split('');
    // Invertir la array
    numberArray.reverse();
    let string= "";
    //Recorrer el array
    for (let i = 0; i < numberArray.length; i++) {
        // Saltar si hay un 0
        if(numberArray[i]==0){
            continue;
        }else{
            string+= numberArray[i];
        }
        // Agregar Ceros
        for (let j = i; j > 0 ; j--) {
            string+= "0";
        }
        string+=" ";
    }
    //Agregar el formato correcto
    let newString = string.split(' ');
    let stringFinally = "";
    for (let i = newString.length-1; i >= 0; i--) {
        if(i > 0 && i < newString.length-1){
            stringFinally+= newString[i] + " + ";
        }else{
            stringFinally+= newString[i];
        }
    }
    console.log('Número: ',n,'\n Descompuesto: ',stringFinally)
}
expandedForm(12); // 12 = '10 + 2'
expandedForm(42); // 42 = '40 + 2'
expandedForm(10); // 10 = '10'
expandedForm(70304); // 70304 = '70000 + 300 + 4'

// ------------EJERCICIO 12------------

//Algoritmo no tan optimo
function theNumberIsAPrime(n) {
  //Encontrar los divisores
  let dividers = 0;
  //Inicializar la variable primo
  let prime;
  //Recorre el número con los divisores posibles
  for (let i = 0; i <= n; i++) {
    if (n > 1 && n!=4 && n % i == 0){ 
        dividers++;
    }
  }
  //Si tiene 2 divisores es primo
  if (dividers == 2 && Math.sign(n)==1) prime = true;
  //Sino, no 
  else prime = false;

  console.log('¿Es primo? ',n,' : ',prime,'\n','Cantidad de divisores: ',dividers)
}
theNumberIsAPrime(2); // == True
theNumberIsAPrime(7); // == True
theNumberIsAPrime(4); // == False
theNumberIsAPrime(1); // == False
theNumberIsAPrime(11); // == True
theNumberIsAPrime(89); // == True
theNumberIsAPrime(80); // == False
theNumberIsAPrime(-1); // == False 
theNumberIsAPrime(-5); // == False

// ------------EJERCICIO 12------------2.0

// Algoritmo más optimo
function theNumberIsAPrime(n) {
    let prime=true;
    let numero = Math.sqrt(n);
    if( n<=1 ) prime = false;
    for (let i = 2; i <= numero; i++) {
        if(n%i==0){
            prime = false;
        }
    }
    console.log(prime)
}

theNumberIsAPrime(2); // == True
theNumberIsAPrime(7); // == True
theNumberIsAPrime(4); // == False
theNumberIsAPrime(1); // == False
theNumberIsAPrime(11); // == True
theNumberIsAPrime(89); // == True
theNumberIsAPrime(80); // == False
theNumberIsAPrime(-1); // == False 
theNumberIsAPrime(-5); // == False

// ------------EJERCICIO 13------------

// Convertir cualquier número entero a binario

function binary(n) {
   //Guardar el número inicial
    let numberInitial = n;
    let string = "";
    //Solo hacer el calculo en numeros positivos
    if(n>0){
     //Hacer el proceso mientras el numero sea mayor o igual a 1
        while (numberInitial>=1) {
     //En la cadena agregar el residuo y la misma cadena detras
            string = numberInitial%2 + string;
     //Dividir el número y tomar el número entero
            numberInitial = Math.trunc(numberInitial/2);
        }
        console.log('Numéro: ',n,'\n En binario: ',string);
    }else{
        console.log('El número es negativo')
    }
    
}
binary(5); // == 101
binary(1); // == 1
binary(-1); // == El número es negativo
binary(1500); // == 10111011100
binary(7); // == 111

// ------------EJERCICIO 14------------

// Convertir cualquier número binario a entero

function decimal(n){
    //Nombrar el número binario
    let binary = 0;
    //Agregar la potencia del número
    let potency=0;
    let numberInitial = n;
    //Hacer el proceso mientra el número sea mayor o igual a 1
    while (numberInitial>=1) {
    //Declarar una variable auxilar para guardar el residuo
        let aux = numberInitial%10;
    //Ir multiplicando los número 1 a la potencia de 2 a la n y sumarlos
        binary += aux * Math.pow(2,potency);
    //Aumentar el valor de n o la potencia
        potency++;
    //Dividir el número entre 10 y tomar el entero
        numberInitial= Math.trunc(numberInitial/10);
    }
    console.log(binary);
}
decimal(101); // == 5
decimal(1); // == 1
decimal(10111011100); // == 1500
decimal(111); // == 7

// ------------EJERCICIO 15------------

// Complete the solution so that the function will break up camel casing, using a space between words.

// solution("camelCasing")  ==  "camel Casing"
// solution("camelCasingTest") == "camel Casing Test"

function spacingInTheString(str){
    let array = str.split('')
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if(array[i]===array[i].toUpperCase()){
            string+=' '+array[i]
        }else{
            string+=array[i];
        }
    }
    console.log(string)
}
spacingInTheString('camelCasing'); // == camel Casing
spacingInTheString('camelCasingTest'); // == camel Casing Test
spacingInTheString('feelFirstFew'); // == feel First Few


// ------------EJERCICIO 16------------

function inverse(n) {
    let count3 = 0;
    let count5 = 0;
    let multiply3 = 0;
    let multiply5 = 0;
        for (let i = 1; i < n; i++) {
            if(i*5<n){
                multiply5 += 5;
                count5 += multiply5;

            }
            if(i*3<n){     
                multiply3 += 3;
                count3 += multiply3;
            }
            
    }
    console.log(count5+count3)
}
inverse(10) // == 23
inverse(20) // == 93
inverse(23) // == 119