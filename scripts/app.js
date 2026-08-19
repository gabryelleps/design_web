alert("Olá, mundo!");

var nasc = 2009;
let nome = "Marília";
const viva = true;
let altura = 1.55;

if (viva){
    let saudacao = "Olá" + nome + "!";
    let msg = `Altura ${altura}m | Idade ${2026-nasc}`;
    alert(saudacao+"\n"+msg);
}else{
    alert("R.I.P");
}