//var

var hello = 'Old Javascript';

//let in let you cannot redeclare value but you can assign new value to it.

let name = 'Modern Javascript';

//console logs

console.log(name);

//constant variables

const surname = 'Nemo';

console.log(surname);

//Strings, typeof, length, concat, uppercase, lowercase, substring

let variable = 'Justin\'s amazing gauntlet';
let lent,
    con,
    up,
    low,
    ind,
    subs;

lent = variable.length;
con = variable.concat(' ', 'hello');
up = variable.toUpperCase();
low = variable.toLowerCase();
ind = variable.indexOf('amazing');
subs = variable.substring(0, 10);
subs = variable.substring(4, 10);
//last substring
subs = variable.substring(variable.length - 2);
//slice
subs = variable.slice(0, 10);
//slice end
subs = variable.slice(-3);
//split
subs = variable.split(' ');
//replace
subs = variable.replace('amazing', 'brilliant');
//includes
subs = variable.includes('gauntlet');
//repeat
subs = variable.repeat(5);



console.log(variable);
console.log(typeof variable)

//concatenation

let conc = 'javascript'

console.log(conc + variable + ' ' + 'nope');

//boolean

let bool = true;

console.log(bool);

//undefined

let definition = undefined;

console.log(definition);

//symbol

let symES6 = symbol('This is a symbol');

console.log(symES6);

//null

let none = null

console.log(none);

//arrays
let arr = ['HTML', 'CSS', 'Javascript'];

console.log(arr);

//Object

let human = {
    gender: 'male',
    race: 'asian'
}

//numbers

const number1 = 10;
    number2 = 20;
    number3 = 30;

let result;

//addition
result = number1 + number2;
//substraction
result = number2 - number1;
//multiplication
result = number1 * number2;
//division
result = number1 / number3;
//modulo
result = number1 % number2;
//PI
result = Math.PI;
//round
result = Math.round(2.4);
//round up
result = Math.ceil(2.2);
//round down
result = Math.floor(2.9);
//square root
result = Math.sqrt(42);
//absolute number
result = Math.abs(number3);
//power
result = Math.pow(0, 3);
//get the minimun number from list
result = Math.min(12,31,2,13,4,1,23,-1);
//get the max number from list
result = Math.max(12, 321, 31, 2, 4);

console.log(result);

//comparison Operators

console.log(1 > 2);
console.log(1 < 2);

//comparing characters
//ABCDE...... abcde

console.log('a' > 'z');
console.log('a' < 'z');
console.log('A' < 'a');

//equality operator

console.log(2 =='2');

//strict comparison operator this will check also the typeof

console.log(2 === '2');

//not equals

console.log(2 != 3);
console.log('hello' != 'Hello');

//compare null and undefine

console.log(null == undefined);
console.log(null === undefined);

//converting string into numbers

const num1 = '40',
    num2 = 10,
    num3 = 'twenty';

    console.log(num1 + num2);
    console.log(parseInt(num1));
    console.log(Number(num1));

//converting string to numbers again

let numba1;

numba1 = Number('20');
numba1 = Number('20.20102');
numba1 = Number(true);
numba1 = Number(false);
numba1 = Number(null);
numba1 = Number('Hello World');
numba1 = Number(1, 2, 3);

//parse int and parse float

numba1 = parseInt('100');
numba1 = parseInt('100.12');
numba1 = parseFloat('100.23');

//to fixed

let nam1 = '1231254125213.21321';
    nam2 = 21321321939219312.2131;

console.log(nam2.toFixed(5));
console.log(numba1);

//converting to string 
//numer to string
let namba = 492;
    display;

    display = String(namba);

console.log(display.length);
console.log(typeof display);

//boolean to string
let dis;

dis = String(true);
//date to string
dis = new Date();
dis = String(dis);

//array to string 

dis = String([1, 2, 3, 4]);

// to string 
