var nomes_alunos = [];
nomes_alunos[0] = "daniel";
nomes_alunos[1] = "iris";
nomes_alunos[2] = "igor";

var nome = prompt("Qual o nome do aluno que voce deseja descobrir o numero?");

if (nome == nomes_alunos[0]){
 alert ("esse nome esta na posicao 0");
}
else if (nome == nomes_alunos[1]){
    alert ("esse nome esta na posicao 1");
}
else if (nome == nomes_alunos[2]){
    alert ("esse nome esta na posicao 2");
}
else {
    alert("esse nome nao esta em nenhum numero das posicoes");
}


   