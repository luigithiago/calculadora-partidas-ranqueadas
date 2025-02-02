//Function to calculate the victories balance
function calculateBalance(victories, losses){
    return victories - losses
}


//Function to calculate the level of player
function calculateLevel(balance){
    if (balance < 10)return "Ferro";
    else if (balance <= 20) return "Bronze";
    else if (balance <= 50) return  "Prata";
    else if (balance <= 80) return  "Ouro";
    else if (balance <= 90) return  "Diamante";
    else if (balance <= 100) return "Lendário"
    else return "Imortal";
}

//Variables return function values
let victoriesBalance = calculateBalance(53, 8)
let level = calculateLevel(victoriesBalance)


//Print victories result and ranked place
console.log(`O Herói tem de saldo de ${victoriesBalance} está no nível de ${level}`)
 