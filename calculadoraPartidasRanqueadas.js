// TO DO - Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
calcularSaldo()

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas
}


function calcularNivel(vitorias){
    if (vitorias < 10)return "Ferro";
    else if (vitorias >= 11 && vitorias <= 20) return "Bronze";
    else if (vitorias >= 21 && vitorias <= 50) return  "Prata";
    else if (vitorias >= 51 && vitorias <= 80) return  "Ouro";
    else if (vitorias >= 81 && vitorias <= 90) return  "Diamante";
    else if (vitorias >=91 && vitorias <= 100) return "Lendário"
    else return "Imortal";
}

for (let nivel in niveis){
  if (vitorias >= nivel.min && vitorias <= nivel){
    return nivel;
  }
}

let saldoVitorias = calcularSaldo(30, 8)
let nivel = calcularNivel()





  // Imprime o resultado no console
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
 