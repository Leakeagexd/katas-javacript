//forma 1 bucle while
function persistence(num) {
    let string = String(num);
    let multiplicacion = 0;
    while (string.length > 1) {
        let acumulador = 1
        for (let i = 0; i < string.length; i++) acumulador *= Number(string[i]);
        string = String(acumulador);
        multiplicacion++
    }
    return multiplicacion;
} 

//forma 2 recursividad
function persistence(num) {
    if (num < 10) return 0;

    let str = String(num);
    let acumulador = 1;
    for (let digit of str) acumulador *= Number(digit);

    return 1 + persistence(acumulador);
}
