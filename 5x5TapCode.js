const caracters = [
  ['A','B','C','D','E'],
  ['F','G','H','I','J'],
  ['L','M','N','O','P'],
  ['Q','R','S','T','U'],
  ['V','W','X','Y','Z']
];

const tapFive = {
    encrypt: function(str) {
    str = str.toUpperCase();
    if (str.includes('K')) 
    {
        str = str.replace(/K/g, 'C');
    } 
    let resultado = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < caracters.length; j++) {
            for (let k = 0; k < caracters[j].length; k++) {
                if (str[i] === caracters[j][k]) {
                    resultado += (j+1).toString() + (k+1).toString();
                }
            }
        }
    }
    return resultado;
    },
    decrypt: function(str) {
    let resultado = '';
    for (let i = 0; i < str.length; i += 2) {
        let fila = parseInt(str[i]) - 1;
        let columna = parseInt(str[i+1]) - 1;
        resultado += caracters[fila][columna];
    }
    return resultado
    }
}
