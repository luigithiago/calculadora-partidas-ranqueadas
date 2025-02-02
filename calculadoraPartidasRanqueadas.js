// TO DO - Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
calcularSaldo()

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas
}
let saldoVitorias = calcularSaldo(20, 10)

function calcularNivel(saldoVitorias){
    if (vitorias < 10)return "Ferro"
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
}




  // Imprime o resultado no console
  console.log(`O Herói tem de saldo de ${saldoVitorias}`)
 