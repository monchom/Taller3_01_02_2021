
// 5.	Realizar un programa que permita escribir los 100 primeros pares.
let num = 0;

while(num <= 100){
    num+=1;
        // console.log(num);
    if(!(num%2 == 0)){
        continue;
    }else if(num%2 == 0){
        console.log(num);
    }
}