let idade = prompt('Qual a sua idade?');
let terminouOEnsinoMedio = prompt('Você terminou o ensino médio?').toLowerCase();
let isCursandoOutraFaculdade = prompt('Você está cursando outra faculdade?').toLowerCase();

if(idade >= 18){
    console.log("A pessoa é maior de idade");
}else{
	console.log("A pessoa é menor de idade");
}
if(terminouOEnsinoMedio === 'sim'){
    console.log('Sim')
}else{
	console.log('Não')
}
if(isCursandoOutraFaculdade === 'sim'){
    console.log('Sim')
}else{
	console.log('Não')
}

