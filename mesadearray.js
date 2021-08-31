// respostas a mesa de trabalho da aula do dia 30/08/21 turma 05 \\

// O que estes códigos retornam? 
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console. \\

// 1) vai retornar resultado : 5 , pois sera contado o quanto há de indices no array.
// 2) vai retornar resultado : array -1 = "Ron";
//    vai retornar resultado : array -2 = "Spiderman";
//    vai retornar resultado : array -3 =  3 \\


//         Array Invertido      \\

function imprimirinverso(){
    return [3, 2, 1]; 
 }
 console.log(imprimirinverso()[2]);
 console.log(imprimirinverso()[1]);
 console.log(imprimirinverso()[0]);
//

function inverter(){
    return [1, 2, 3];
}
console.log(inverter()[2]);
console.log(inverter()[1]);
console.log(inverter()[0]); 


//        Somar Array    \\

function somararray(){
    return [89, 45, 63]
}
function soma(){
 let conta = somararray()[0] + somararray()[1] + somararray()[2]
 return conta
}
console.log(soma())

//  Array.join  \\

function join(){
    return ["nao", " ", "é", " ", "facil", " ", "js"]
}
function junto(){
let juntar = join()[0] + join()[1] + join()[2] + join()[3] + join()[4] + join()[5] +join()[6];
return juntar
}
console.log(junto())

// Coleção de filmes e mais .\\
// 1 e 2\\

function filmes(starwars, matrix, mrrobot, opreçodoamanhã, avidaébela ){
    ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"]
let nome = "star wars"
   return nome.toUpperCase()
} function filmes1(matrix){
   let nome1 = "matrix"
   return nome1.toUpperCase()
} function filmes2(mrrobot){
   let nome2 = "mr. robot" 
   return nome2.toUpperCase()
} function filmes3(opreçodoamanhã){
   let nome3 = "o preço do amanhã"
   return nome3.toUpperCase()
} function filmes4(){
   let nome4 = "a vida é bela"
   return nome4.toUpperCase()
}
console.log(filmes("star wars".toUpperCase()))
console.log(filmes1("matrix".toUpperCase()))
console.log(filmes2("mr. robot".toUpperCase()))
console.log(filmes3("o preço do amanhã".toUpperCase()))
console.log(filmes4("a vida é bela".toUpperCase()))

// 3 \\

function titulos(toystory, findignemo){
    ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
    let num= ["toy story finding Nemo"]
    return  num
}
console.log(titulos())

// 4 \\

function game(){
    let lista = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
    let jogo = "fortnite"
    let respt = lista.pop()
    return lista
}
console.log(game())

// 5 \\

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let respo = false 
function score(asiaScores, euroScores){
if(asiaScores == euroScores){
console.log(respo, "são resultados diferentes")}
}
score()