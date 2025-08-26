let idade = parseInt(prompt(" qual sua idade"))
let ingresso = prompt("vc tem um ingreso? [S/N]").toLocaleLowerCase

    if (ingresso === "s") { // 21, s 
        ingresso = true 
        if (idade >= 18 && ingresso == true) { 
            alert("voce pode entrar!")
        } else { 
            alert("voce nao poe entrar... ")
        }
     } else if (ingresso === "n") { 
         ingresso = false
    } else {
         alert("voce digitou algo errado. Fim do progama.")
    }