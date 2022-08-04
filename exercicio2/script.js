let idade = prompt('Qual a sua idade?');
let terminouOEnsinoMedio = prompt('Você terminou o ensino médio?');
let isCursandoOutraFaculdade = prompt('Você está cursando outra faculdade?');

if(idade >= 18){
    console.log("A pessoa é maior de idade");
}else{
	console.log("A pessoa é menor de idade");
}
if(terminouOEnsinoMedio === 'sim'&&'Sim'){
    console.log('Sim')
}else{
	console.log('Não')
}
if(isCursandoOutraFaculdade === 'sim'&&'Sim'){
    console.log('Sim')
}else{
	console.log('Não')
}

