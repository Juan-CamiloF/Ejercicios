//------------EJERCICIO 1------------

// Know if a phrase is Palindrome or not
function Palindrome(str) {
  //Clean the string
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
  //To invert string
  let newStringReverse="";
  //Get the string in reverse
  for (let i = newString.length - 1; i >= 0; i--) {
      newStringReverse += newString[i];
  }
  //Compare the two string, the invert and normal
  let isPalindrome = false;
  for (let j = 0; j < newString.length; j++) {
      if(newString[j]==newStringReverse[j]){
          isPalindrome = true;
      }else isPalindrome = false;
  }
  return console.log(isPalindrome);
}

// Unit test the Palindrome function in Spanish
Palindrome("A mamá, Roma le aviva el amor a papá y a papá, Roma le aviva el amor a Mamá."); // == True
Palindrome('Allí va Ramón y no maravilla.') // == True
Palindrome('Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida') // == True
Palindrome('Ají traga la lagartija'); // == True
Palindrome('Allí va Ramón y no maravilla.');
Palindrome('Esto no es un palindromo o eso creo, ah no ya mire y no'); // == False
Palindrome('Este tampoco'); // == False

// ------------EJERCICIO 2------------

// In this small task, it is given a String the numbers separated for spaces
// and should return the number more bigger and the more small

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
    return console.log('Numero menor', numeroMenor,'Numero mayor',numeroMayor)

}
numbers('1 2 3 4 5') // == (1,5)
numbers('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') // == (-214,542)
numbers('1 9 3 4 -5') // == (-5,9)
numbers('1 2 -3 4 5') // == (-3,5)

// ------------EJERCICIO 3------------

// Find the succession the Fibonacci from a number
function fibonacci(n) {
    //Make a array with the two first numbers of the succession
    let array = [0,1];
    //Cycle through the entered size and start a sum of the previous numbers.
    for (let j = 2; j < n; j++) {
        array[j]=(array[j-1]+array[j-2]);
    }
    return console.log(array)
}
//Unit test Fibonacci function
fibonacci(5) // == [0, 1, 1, 2, 3]
fibonacci(8) // == [0, 1, 1, 2, 3, 5, 8, 13]
fibonacci(2) // == [0, 1]
fibonacci(4) // == [0, 1, 1, 2]

// ------------EJERCICIO 4------------

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters
// and right side letters was too high and the war began.

// Write a function that accepts fight string consists of only small letters and return
//who wins the fight. When the left side wins return Left side wins!, when the right side
//wins return Right side wins!, in other case return Let's fight again!.

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

function winner(str){
    //Scoreboard starting
    let right = 0;
    let left = 0;
    //Convert the string in array
    let string = str.split('');
    //Go through the array and add
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
    //Final result
    if(left>right){
        return console.log('Gano izquierda con: ', left);
    }else if(left==right){
        return console.log('Empate');
    }
    else{
        return console.log('Gano derecha con: ', right)
    }
}
// Unit test
winner('z') // == Win rigth with : 1
winner('zdqmwpbs') // == Tie
winner('zzzzs') // == Win right with : 4
winner('wwwwwwz') // == Win rigth with : 24;

// ------------EJERCICIO 5------------

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function kata(str) {
  let string = str.toLowerCase().split("");
  let stringInitial = "";
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
        stringInitial += objectLetterAndValue[j].value +" ";

      }
    }
  }
  let stringFinal = stringInitial.trim()
  return console.log(stringFinal);
}
// Unit test
kata("The sunset sets at twelve o' clock."); //== 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
kata("6w=cr kg"); // == 23 3 18 11 7
kata("The narwhal bacons at midnight."); // == 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20
kata("c?0h+874"); // == 3 8

// ------------EJERCICIO 6------------

// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function deleteSmaller(arr) {
  let smallNumber = 10000;
  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNumber) {
      smallNumber = arr[i];
      position = i;
    }
  }
  let newArray = [];
  for (let j = 0; j < arr.length; j++) {
    if (j != position) {
      newArray.push(arr[j]);
    }
  }
  return console.log(newArray);
}
// Unit test
deleteSmaller([1, 2, 3, 4, 5]); // == [2, 3, 4, 5]
deleteSmaller([5, 3, 2, 1, 4]); // == [5, 3, 2, 4]
deleteSmaller([2, 2, 1, 2, 1]); // == [2, 2, 2, 1]
deleteSmaller([0, 1]); // == [1]
deleteSmaller([]); // == []

// ------------EJERCICIO 7------------

// Complet the method / function what for convert the word bounded for hyphen
// underlline in upper case and lower case.
// the firts word inside of output should wrinting in upper case only
// if the firts original word was in upper case (known with upper case and lower case,
// also known as upper case Pascal)

function toCamelCase(str) {
    let string = str.split('');
    let cad = "";
    for (let i = 0; i < string.length; i++) {
        if(string[i] == '_' || string[i] == '-'){
            string.splice(i,1);  //Quitar el guion o raya al piso
            string[i]=string[i].toUpperCase(); //Poner en mayuscula la siguiente letra
        }
    }
    for (let j = 0; j < string.length; j++) {
        cad+=string[j];
    }
    return console.log(cad)
}
//Unit test
toCamelCase("the-stealth-warrior") // == theStealthWarrior
toCamelCase("the_stealth_warrior") // == theStealthWarrior
toCamelCase("el_juan_maravilla") // == elJuanMaravilla
toCamelCase("El-juan-maravilla") // == ElJuanMaravilla

// ------------EJERCICIO 8------------

// Doing multiplication without the multiplication sign

function multiply(number1, number2) {
  let result = 0;
  let sign = Math.sign(number2);
  for (let i = 0; i < number1; i++) {
    result = sign = 1 ? result + number2 : result - number2;
  }
  return console.log(result);
}
//Unit test
multiply(5, 4); // == 20
multiply(4, -4); // == -16
multiply(5, 0); // == 0
multiply(10, 5); // == 50

// ------------EJERCICIO 9------------

// Clean a array the undefine, 0, null, false, without modify the principal array

function clean(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]){
           newArray.push(arr[i]);
       }
    }
    return console.log('Array original: ',arr,'\n','Array limpio',newArray)
}
// Unit test
clean([1,2,false,undefined,3,'Hola',null]); // == [1, 2, 3, "Hola"]
clean([1,2,3,4,5,null,null,null]); // == [1, 2, 3, 4, 5]
clean([undefined,0,null,false]) // == []

// ------------EJERCICIO 10------------

// The objective in this kata is implemente a difference function,
// what remains a lista from another and return the result.
// arrayDiff ([1,2], [1]) == [2]
// if a value this present in b, all his ocurrencis must be eliminated of the another

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
  return console.log(arrA);
}
// Unit test
arrayDiff([1, 2, 3], [1,2]); // == [2]
arrayDiff([-3,-1,-13,-15,14,3,2,15],[-1,14,-3]) // == [-13, -15, 3, 2, 15]
arrayDiff ([1,2,2,2,3], [2]); // == [1,3]

// ------------EJERCICIO 11------------

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased. The indexing just explained is zero based,
// so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

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
        return console.log(cad.trim())

}
// Unit test
toWeirdCase("String is a test") // == StRiNg Is A TeSt
toWeirdCase("Looks like you passed") // == LoOkS LiKe YoU PaSsEd
toWeirdCase("ThIs Is ThE FiNaL TeSt CaSe") // == ThIs Is ThE FiNaL TeSt CaSe
toWeirdCase("Ok FiNe YoU ArE DoNe NoW") // == Ok FiNe YoU ArE DoNe NoW

// ------------EJERCICIO 12------------

// Write a function which will acept a sequence of numbers and calculate the variance for the sequenci.
// The variance for a set of numbers is found by subtracting the mean from every value, adding them all up and
// dividing by the number of elements

// For example, in psudo code, to calculate the variance for [1, 2,2 ,3].

// mean = (1 + 2 + 2 + 3) / 4
// => 2

// variance = ((1 - 2) ^ 2 + (2 - 2) ^ 2 + (2-2) ^ 2 + (3 - 2) ^ 2) / 4
// => 0,5

function variance (arr){
    //Find the mean for array
    let mean = 0;
    for (let i of arr) {
        mean+=i;
    }
    mean/=arr.length;
    //Find the variance for array
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log()
        result+= (arr[i]-mean)**2;
    }
    result/=arr.length;
    return console.log('Media: ',mean,'\n','Varianza: ',result);

}
// Unit test
variance([1, 2, 2, 3]); // == 2 , 0.5
variance([-10, 0, 10, 20, 30]); // == 10 , 200
variance([8, 9, 10, 11, 12]); // == 10 , 2

// ------------EJERCICIO 13------------

// Will be given a number and shall return it as a string in expansive shape. For example:
// 12 = '10 + 2'
// 42 = '40 + 2'
// 70304 = '70000 + 300 + 4'

function expandedForm(n){
    let numberString = n.toString();
    let numberArray = numberString.split('');
    numberArray.reverse();
    let string= "";
    for (let i = 0; i < numberArray.length; i++) {
        if(numberArray[i]==0){
            continue;
        }else{
            string+= numberArray[i];
        }
        for (let j = i; j > 0 ; j--) {
            string+= "0";
        }
        string+=" ";
    }
    let newString = string.split(' ');
    let stringFinally = "";
    for (let i = newString.length-1; i >= 0; i--) {
        if(i > 0 && i < newString.length-1){
            stringFinally+= newString[i] + " + ";
        }else{
            stringFinally+= newString[i];
        }
    }
    return console.log('Número: ',n,'\n Descompuesto: ',stringFinally)
}
expandedForm(12); // 12 = '10 + 2'
expandedForm(42); // 42 = '40 + 2'
expandedForm(10); // 10 = '10'
expandedForm(70304); // 70304 = '70000 + 300 + 4'

// ------------EJERCICIO 14------------

// The number is a Prime?
// Not so optimal algorithm
function theNumberIsAPrime(n) {
  let dividers = 0;
  let prime;
  for (let i = 0; i <= n; i++) {
    if (n > 1 && n!=4 && n % i == 0){
        dividers++;
    }
  }
  if (dividers == 2 && Math.sign(n)==1) prime = true;
  else prime = false;
  return console.log('¿Es primo? ',n,' : ',prime,'\n','Cantidad de divisores: ',dividers)
}
// Unit test
theNumberIsAPrime(2); // == True
theNumberIsAPrime(7); // == True
theNumberIsAPrime(4); // == False
theNumberIsAPrime(1); // == False
theNumberIsAPrime(11); // == True
theNumberIsAPrime(89); // == True
theNumberIsAPrime(80); // == False
theNumberIsAPrime(-1); // == False
theNumberIsAPrime(-5); // == False

// ------------EJERCICIO 14------------2.0

// Optimal algorithm
function theNumberIsAPrime(n) {
    let prime=true;
    let numero = Math.sqrt(n);
    if( n<=1 ) prime = false;
    for (let i = 2; i <= numero; i++) {
        if(n%i==0){
            prime = false;
        }
    }
    return console.log(prime)
}
// Unit test
theNumberIsAPrime(2); // == True
theNumberIsAPrime(7); // == True
theNumberIsAPrime(4); // == False
theNumberIsAPrime(1); // == False
theNumberIsAPrime(11); // == True
theNumberIsAPrime(89); // == True
theNumberIsAPrime(80); // == False
theNumberIsAPrime(-1); // == False
theNumberIsAPrime(-5); // == False

// ------------EJERCICIO 15------------

// Convert any integer to binary

function binary(n) {
    let numberInitial = n;
    let string = "";
    if(n>0){
        while (numberInitial>=1) {
            string = numberInitial%2 + string;
            numberInitial = Math.trunc(numberInitial/2);
        }
        return console.log('Numéro: ',n,'\n En binario: ',string);
    }else{
        return console.log('El número es negativo')
    }
}
// Unit test
binary(5); // == 101
binary(1); // == 1
binary(-1); // == El número es negativo
binary(1500); // == 10111011100
binary(7); // == 111

// ------------EJERCICIO 16------------

// Convert any binary to integer

function decimal(n){
    let binary = 0;
    let potency=0;
    let numberInitial = n;
    while (numberInitial>=1) {
        let aux = numberInitial%10;
        binary += aux * Math.pow(2,potency);
        potency++;
        numberInitial = Math.trunc(numberInitial/10);
    }
    return console.log(binary);
}
// Unit test
decimal(101); // == 5
decimal(1); // == 1
decimal(10111011100); // == 1500
decimal(111); // == 7

// ------------EJERCICIO 17------------

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
// Unit test
spacingInTheString('camelCasing'); // == camel Casing
spacingInTheString('camelCasingTest'); // == camel Casing Test
spacingInTheString('feelFirstFew'); // == feel First Few

// ------------EJERCICIO 18------------

// Remove the amount the small integers of a array give
// if the integer is higher to amount the data from the array
// return [], if the integer is 0 return the array

function removeNSmallest( n, arr ) {
	if(n==0) return console.log(arr);
	if(n>arr.length) return console.log([]);
	while(n>0 && n<=arr.length){
     let numeroMenor = 1000;
		for(let i=0; i<=arr.length; i++){
			if(arr[i]<numeroMenor){
                numeroMenor = arr[i];
			}
		}
        const index = arr.indexOf(numeroMenor);
        arr.splice(index,1);
	    n--;
	}
	return console.log(arr);
}
// Unit test
removeNSmallest(4,[1,2,3,4,5]); // == [5]
removeNSmallest(5,[1,2,3]); // == []
removeNSmallest(1,[1,2,3]); // == [2,3]
removeNSmallest(0,[7,8,9]) // == [7,8,9]

// ------------EJERCICIO 19------------

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// implement a function that determines whether a string that contains only letters is an
// isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  str = str.toLowerCase().split("");
  let stack = [];
  let isIsogram = true;
  for (let i = 0; i < str.length; i++) {
    if (stack.indexOf(str[i])<0) {
        stack.push(str[i]);
    }else{
        isIsogram = false;
    }
  }
  return console.log(stack, isIsogram);
}
// Unit test
isIsogram("Dermatoglyphics"); //== true
isIsogram("aba"); //== false
isIsogram("moOse"); // == false // -- ignore letter case

// ------------EJERCICIO 20------------

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % 2 == 0) {
    return console.log("even");
  } else {
    return console.log("odd");
  }
}
// Unit test
oddOrEven([0]); // == 'even'
oddOrEven([0, 1, 4]); // == 'odd'
oddOrEven([0,-1,-5]); // == 'even'

//  ------------EJERCICIO 21------------

// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

function uniqueInOrder(params) {
  let arr = [];
  if (typeof params == "string") {
    arr = params.split("");
  }else{
      arr = params;
  }
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.indexOf(arr[i]) < 0) {
      stack.push(arr[i]);
    }
  }
  return console.log(stack);
}
// Unit test
uniqueInOrder("AAAABBBCCDAABBB"); // == ['A', 'B', 'C', 'D']
uniqueInOrder("ABBCcAD"); // == ['A', 'B', 'C', 'c', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); //   == [1,2,3]

//  ------------EJERCICIO 22------------

// Order the numbers the array from lowest to highest

function order(arr) {
    let aux = 0;
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
            if(arr[j]>arr[j+1]){
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=aux;
            }
       }
    }
    return console.log(arr)
}
order([5,4,3,2,1]) // == [1,2,3,4,5]

//  ------------EJERCICIO 23------------

// IPV4 to int32

function ipToInt(ip) {
    let arr = ip.split('.');
    let cad = "";
    for (let i = 0; i < arr.length; i++) {
        let octet = "";
        while (arr[i]>=1) {
         octet = arr[i]%2 + octet;
         arr[i] = Math.trunc(arr[i]/2);
        }
        if(octet.length<8){
            while (octet.length<8) {
                octet = '0'+octet;
            }
            cad+=octet;
        }else{
            cad += octet;
        }
    }
    let decimal = 0;
    for (let i = 0; i < cad.length; i++) {
        decimal += cad[i] * Math.pow(2,cad.length-1-i);
    }
    return console.log(decimal)
}
ipToInt("128.32.10.1"); // == 2149583361

//  ------------EJERCICIO 24------------

// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

function parts_sum(arr) {
  let sums = [];
  let i = 0;
  while (arr.length > 0) {
    let valor = 0;
    for (let j = 0; j < arr.length; j++) {
      valor += arr[j];
    }
    sums[i] = valor;
    i++;
    arr.splice(0, 1);
  }
  if (arr.length == 0) {
    sums.push(0);
  }
  console.log(sums);
}
// Unit test
parts_sum([0, 1, 3, 6, 10]); // == [20, 20, 19, 16, 10, 0]
parts_sum([1, 2, 3, 4, 5, 6]); // == [21, 20, 18, 15, 11, 6, 0]
parts_sum([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]); // ==  [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);

// // //  ------------EJERCICIO 25------------ -> Faltan para números muy grandes

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
function upArray(arr) {
    console.log(arr.length)
  if (!arr.length) return console.log(null);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 10 || arr[j] < 0) {
      return console.log(null);
    }
  }
  let n = "";
  for (let i = 0; i < arr.length; i++) {
    n += arr[i] + "";
  }
  let numero = Number(n)+1;
  numero = parseInt(numero,10)
  console.log(numero)
  let total = [];
  console.log(numero.toString().length);
  for (let k = 0; k < numero.toString().length; k++) {
    total.push(parseInt(numero.toString()[k]));
  }
  console.log(total);
}
// Unit test
upArray([2, 3, 9]);
upArray([4, 3, 2, 5]);
upArray([1, -9]);
upArray([9,9,9]);
upArray([]);
upArray([
  9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4,
  2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1,
]);

//  ------------EJERCICIO 26------------

//Heron's formule, the formule is for calculate the area of a triangule with three sides.

function heronFormule(a,b,c){
    const s = (a+b+c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}
// Unit test
heronFormule(3,4,5) //== 6
heronFormule(12,12,12) // == 62,35
heronFormule(6,8,12) // == 21,33
heronFormule(2,3,4) // == 2.90

//  ------------EJERCICIO 27------------

// Calculate area of given triangle. Create a function t_area that will take a string which
// will represent triangle, find area of the triangle, one space will be equal to one length unit.
// The smallest triangle will have one length unit.

function atArea(str){
    let arr = str.split("\n");
    let heigh = arr.length-3;
    let base= arr[arr.length-2];
    let dots = base.split(' ');
    return console.log('Area: ',(heigh*(dots.length-1))/2)
}
// Unit test
atArea('\n.\n. .\n'); // == 0.5
atArea('\n.\n. .\n. . .\n'); // == 2
atArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n') // == 32
atArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n') // == 8

//  ------------EJERCICIO 28------------

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWord(str) {
  let arr = str.split(" ");
  let string = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    string += arr[i] + " ";
  }
  console.log(string.trim());
}
// Unit test
reverseWord("hello world!"); // == world! hello
reverseWord("yoda doesn't speak like this"); // == this like speak doesn't yoda
reverseWord("foobar") //  == foobar
reverseWord("editor kata") //  == editor kata

//  ------------EJERCICIO 29------------

// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function years(humanYears) {
  let arr = [humanYears];
  let gatos = 0,
    perros = 0;
  for (let i = 0; i <= humanYears; i++) {
    if (i == 1) {
      gatos += 15;
      perros += 15;
    } else if (i == 2) {
      gatos += 9;
      perros += 9;
    } else if (i > 1) {
      gatos += 4;
      perros += 5;
    }
  }
  arr.push(gatos, perros);
  console.log(arr);
}
// Unit test
years(1); // == [1,15,15];
years(10); // == [10,56,64];
years(2); // == [2,24,24];
years(19); // == [19,80,94];
years(20); // == [20,96,114];
years(6); // == [6,40,44];

//  ------------EJERCICIO 30------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let string = str.toLowerCase().split("");
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return console.log(count);
}
// // Unit test
vowel("abracadabra"); // == 5;
vowel("pear tree"); // == 4;
vowel("o a kak ushakov lil vo kashu kakao"); // == 13;
vowel("my pyx")// == 0;
