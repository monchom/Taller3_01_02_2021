
// 2.	Realice un programa que calcule el máximo de N números leídos desde teclado.

let numero = [];
suspender:
do{
    let n = parseInt(prompt("Ingrese un numero"));
    numero.push(n);
    let opc = parseInt(prompt("Deseas ingresar otro numero.\n 1. Si. \n 2. No"));
    switch (opc) {
        case 1:
            continue suspender;
        case 2:
            console.log(`La cantidada de numeros ingresados por pantalla es ${numero.length}`);
            console.log(numero);
            break suspender;
        default:
            alert("Opción no valida.");
            break;
    }
}while(true)