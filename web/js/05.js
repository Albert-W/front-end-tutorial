var num1 = 10,
    num2 = 5,
    num3 = num1++ - num2;    // -, = ,++
console.log(num1);     // 11
console.log(num3);     // 5

var x1 = 20,
    x2 = 30,
    x3 = --x1 + x2--; //x1--, +, =, x2--


console.log(x1);    // 19
console.log(x2);    // 29
console.log(x3);    // 19+30=49


var a = 10;
var b = 20;
var str = "hello ";
a += 5;   // a=a+5
b %= 4;   // b=b%4;
str += " world";  //str=str+"world";
console.log(str);
console.log(a > b);

var x = 10,
    y = "10",
    m = 15,
    //z=x==y;    // 值是否相等
    z = x === y,    // 全等
    n = x !== y;
console.log(n); //true

console.log(null === undefined); //false

var score = 55;
var result = (score >= 60) ? "及格" : "不及格";

console.log(result);