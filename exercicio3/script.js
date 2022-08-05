let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase().replace(/o$/,"a")
if(nacionalidade === "brasileira"){
    console.log("A pessoa é brasileira");
}else if(nacionalidade === "argentina"){
	console.log("A pessoa é argentina ");
}else if(nacionalidade === "uruguaia"){
    console.log("A pessoa é uruguaia");
}else if(nacionalidade === "chilena"){
    console.log("A pessoa é chilena");
}else if(nacionalidade === "colombiana"){
	console.log("A pessoa é colombiana");
}else{
    console.log("Nacionalidade não encontrada");
}


//regex
// const opcaoNacionalidade = [
//     "brasileira","brasileiro",
//     "argentina","argentino",
//     "uruguaia","uruguaio",
//     "colombiana","colombiano", 
//     "chilena","chileno" 
// ]
// const mensagem = `Qual sua nacionalidade? \nAs principais opções são: \n${opcaoNacionalidade[0]}; \n${opcaoNacionalidade[2]}; \n${opcaoNacionalidade[4]}; \n${opcaoNacionalidade[6]}; \n${opcaoNacionalidade[8]};`
// let nacionalidade = prompt(mensagem).toLocaleLowerCase()
// if (opcaoNacionalidade.includes(nacionalidade)) {
//     console.log(`Você e: ${nacionalidade}`)
// } else {
//     console.log(`nacionalidade não encontrada (${nacionalidade})`)
// }