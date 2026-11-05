let consumo = Number(prompt("Digite o valor total da conta:"));
let gorjeta = Number(prompt("Digite a porcentagem da gorjeta:"));
let pessoas = Number(prompt("Em quantas pessoas será dividida a conta?"));

let valorGorjeta = consumo * (gorjeta / 100);
let total = consumo + valorGorjeta;
let valorPessoa = total / pessoas;

alert(
    `--- Resumo da Conta ---
Consumo: R$ ${consumo.toFixed(2)}
Gorjeta: R$ ${valorGorjeta.toFixed(2)}
Total com Gorjeta: R$ ${total.toFixed(2)}
Divisão por pessoa (${pessoas} pessoas): R$ ${valorPessoa.toFixed(2)}`
);
