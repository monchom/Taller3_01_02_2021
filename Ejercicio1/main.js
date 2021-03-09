// 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.


parar:
do{
     var num1 = parseInt(prompt("Ingrese el numero 1"))
     var num2 = parseInt(prompt("Ingrese el numero 2"))

     if(num1!==num2){

        console.log(comparacion(num1,num2));
        break parar;
     }

}while(true);

function comparacion(num1, num2){
   if(num1>num2){
      
       return `El numero 1: ${num1} es mayor que el numero 2: ${num2}`;
       

   }else {
    return `El numero 2: ${num2} es mayor que el numero 1: ${num1}`;
   }

}
