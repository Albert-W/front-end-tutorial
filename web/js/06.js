var num1=10,
    num2=20,
    num3=30,
    str="welcome",
    bool=true,
    n=null,
    m;

/* console.log(num1<num2 && num2<num3);  // true

 console.log(num1<num2 && num2==num3);  // 所有条件都为true才返回true

 console.log(num2<num3 && num3>num1 && false);*/

/* console.log(str && num3);  // 30 "" false  true  0 false true

 console.log(80 && 55);

 console.log("hello" && 65 && "abc");  // abc

 console.log(0 && 88);

 console.log("" && 0 && 30>20);*/
console.log(n && num3);
console.log(55 && true && 33*"abc");
console.log(m && true);

var m;
/*console.log(55>88 || 33<66);
console.log(55!="55" || 88==="88");

console.log("hello" || 0);     // hello
console.log(99 || 0 || "abc"); // 99
console.log("" || 88 || true); // 88
console.log("" || 0 || "abc");  // abc
console.log(0 || "" || null); // null
console.log(0 || "" || null || "hello");  // hello
console.log(m || NaN || 99);  // 99
console.log("" || m);  // undefined
console.log(30*"abc" || 55-"def");  // NaN*/

// 非
console.log(!false);  // true
console.log(!88);  // false
console.log(!0);   // true
console.log(!"red");  //false
console.log(!NaN);
console.log(!null);

console.log(!!"");  // false
console.log(!!"blue");  //true