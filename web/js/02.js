
// 2，3，4
// 声明保存用户名的变量
/*var name_01;
name_01="marry";*/
// 声明保存年龄的变量
//var age=18;  // 声明的同时赋值
// 声明保存邮箱的变量
//var email="marry@sina.com.cn";
// 一次声明多个变量

var name_01="marry",age=18,email="marry@sohu.com",address,settings=null;

var distance=12.67980;

var id="16";

console.log(typeof(distance))  //number 在控制台中打印

console.log(typeof(address)) //undefined

console.log(typeof(null)) //object
console.log(age-"abc"); //NaN  面试
console.log(typeof(age-"abc")); //number

console.log(isNaN(email)); //true 非数值

console.log(isNaN(id)); //false "16"被强转成数字

id=Number(id);

console.log(typeof id); //number

name_01=Number(name_01);

console.log(name_01);   // NaN

var topval=parseInt("28px");

console.log(topval); //28

var c="abc58"

console.log(parseInt(c)); // NaN, 必须以数字开头

console.log(parseInt("0xf",16)); //15， 16是可选

var d=parseFloat("12.34.56px");

console.log(d); //12.34

var e=parseFloat("0.123abc");

console.log(e); //0.123

console.log(parseInt("0123"));//123

var msg='hello world';

var ids=78965;

var idstr=ids.toString();

console.log(typeof idstr); //string

var m;

console.log(String(m)); //undefined

var isStudent=true;

var isChild=false;


console.log(isChild.toString()); //false

var x=0;

var strings=" ";

console.log(Boolean(strings)); // true

var y;

var timer=null;

console.log(Boolean(timer)); //false
