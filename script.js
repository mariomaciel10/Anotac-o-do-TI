let nome = "Luis Guilherme"
let idade = 15
let city = "General Sampaio"
let Profissao = "Estudante"
let anoatual = 2025
let salario = 200
let bonus = 100
//calculos
let salabonus = salario + bonus
const anonascimento = anoatual - idade
let totalano = salabonus * 12
let dobrototalano = totalano * 2
alert(`
    =========Relatório do usuário=========
    Nome: ${nome}
     Idade: ${idade}
     Ano de nascimento: ${anonascimento}
     Cidade: ${city}
     Profissão: ${Profissao}    
    
     Sálario base: U$${salario}
     Bônus: U$${bonus}
     Total Mensal: U$${salabonus} 
     Total ano: U$${totalano}
     Total anual: U$${dobrototalano}
    =====================================
    `)