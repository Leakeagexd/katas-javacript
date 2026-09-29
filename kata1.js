const ultimoDiaEsViernes = function (ano1, ano2 = ano1) {

    let contador = 0;
    for (let i = ano1; i <= ano2; i++) {
        for (let j = 0; j < 12; j++) {
               if (new Date(i, j + 1, 0).getDay() === 5) {
                contador++
            }
          }
     }
      return(contador);
}

ultimoDiaEsViernes(1901, 2000);