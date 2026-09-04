let vezes = Number(prompt("Digite o número de vezes: "));
for (let i = 1; i<=vezes; i++){
    if (vezes > 100){
        alert("Valor inválido, digite um valor de 0 a 100");
        break //quebra totalmente o bloco de repetição
    }
    alert(`Contei ${i} vezes`);
    if (i%2==0){//é ímpar, continua
        continue;//se ímpar, continua = voltar para o início
    }
    alert(`${i} é par`);
}