
//4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C. El diagrama debe decidir cuál es el mayor y cuál es el menor


let num_1 = parseInt(prompt("Ingrese numero 1: "));
let num_2 = parseInt(prompt("Ingrese numero 2: "));
let num_3 = parseInt(prompt("Ingrese numero 3: "));

if((num_1>num_2 && num_1>num_3) && (num_2>num_3)){
    console.log(`El numero ${num_1} es el mayor de todos, y el numero ${num_3}, es el menor`);
}else if((num_2>num_1 && num_2>num_3) && (num_3<num_1)){
    console.log(`El numero ${num_2} es el mayor, y el número ${num_3} es el menor` );
}else if((num_3>num_2 && num_3>num_1)&&(num_1<num_2)){
    console.log(`El numero ${num_3} es el mayor, y el número ${num_1}, es el menor`);
}else 
    console.log("Los números son iguales");