/*var age=35;
       if(age<18){
          alert("您还没有成年");
       }*/
var age=prompt("请输入您的年龄");
/*if(age<18){
   alert("您还没有成年");
}else{
   alert("您已成年，请提供您的身份证号");
}*/
if(age<18){
    alert("您还没有成年");
}else if(age>=18 && age<=59){   // 18岁到59岁之间
    alert("您可以进入");
}else{
    alert("您已超出年龄限制");
}

var password=prompt("请设置您的密码");
// 判断密码的长度，如果不是6位，否则
if(password.length!=6){
    alert("请输入6位的数字密码");
}else{
    // 如果密码是非数字，否则是数字
    if(isNaN(password)){
        alert("密码必须要是数字");
    }else{
        alert("密码设置正确");
    }
}