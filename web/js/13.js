/*function inner(){
   // arguments
   console.log(arguments.length);
   console.log(arguments[1]); // 索引是从0开始的正整数
}
//inner(10,5);
function add(num1,num2){
   arguments[0]=99;
   console.log(num1);
}
add(55,88)*/
// 求任意一组数的平均值
function getAvg(){
    // 多所有参数进行求和
    var sum=0,len=arguments.length,i;
    for(i=0;i<len;i++){
        //sum=sum+arguments[i];
        sum+=arguments[i];
        // sum=0+5
        // sum=0+5+66
        // sum=0+5+66+45
    }
    return sum/len;
}
var avg=getAvg(5,66,45,32,88,24,40,199,3900);
console.log(avg);