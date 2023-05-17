//AULA LAÇOS

/*
//Exercício 1. ● No nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
//● Quando ele digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números por ele indicados
//● Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
//O resultado deve ser: 70

let numero; //declarando variável sem atribuir valor
let resultado = 0; //inicializando variável resultado e igualando a 0, para soma dos números a serem digitados no while abaixo

while (numero !== 0) { //enquanto numero digitado for diferente de 0
    numero = Number(prompt('Digite um número')); 
    resultado = resultado + numero; //somando a variável soma com o número digitado ENQUANTO o número digitado não for 0
    
}
console.log(soma);
*/

/*
//Exercício 2. ● Escreva uma função que receba um array com números e devolva qual o maior dentro dele
//● Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"

let arrayNumeros = [11, 15, 18, 14, 12, 19];

function receberArray(array) {
    let numeroMaior = 0;                              //Declarando uma variável para receber o maior número do array e inicializando com valor 0
    for (i = 0; i <array.length; i++){                //inicializando variável i, a condição é de que o loop vai acontecer até que i seja menor do que o tamanho do array recebido;  
        let numeroAtual = array[i];                   //incializando variável numeroAtual para pegar o valor do índice atual do array  
        if (numeroAtual >= numeroMaior){              // se a variável númeroAtual for maior ou igual à variável numeroMaior, igualar as duas variáveis 
            numeroMaior = numeroAtual;
        }
    }
    return console.log(`O número maior é ${numeroMaior}`);
}

receberArray(arrayNumeros);
*/

/*
//Exercício 2 (Método alternativo sem uso do FOR)
var arrayNumeros = [11, 300, 15, 18, 14, 301, 12, 13];
var arrayOrdenado = arrayNumeros.sort(function(a, b){return a - b});
console.log(arrayOrdenado);
*/

/*
//Exercício 3.  Considere que você tem um array com várias palavras. Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando
//um espaço entre elas.
//● Ex: Para este array ["Oi", "sumido", "tudo", "bem?","Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades"

let arrayFrase = ["Oi", "sumido", "tudo", "bem?","Saudades"];

function retornarFrase(array){
    var frase = [];
    for (let palavras of array){
        frase.push(palavras);
    }
    fraseString = frase.join(' '); //similar ao toString, porém permite adicionar (" ") ou remover ("") espaços da string retornada, dentre outras opções, além de não usar vírgulas como o toString
    return console.log(fraseString);
}
retornarFrase(arrayFrase);
*/


//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//1ª repetição = i(0) + 0 = 0;
//2ª repetição = i(1) + 0 = 1;
//3ª repetiçao = i(2) + 1 = 3;
//4ª repetição = i(3) + 3 = 6;
//5ª repetição = i(4) + 6 = 10;

//Resposta: está acrescendo 1 à variável i até a quarta repetição e retornando a variável valor, que é a soma de i + i.
*/


/*
//2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) O que vai ser impresso no console? 
//Vai mostrar todos os números do array lista que forem maiores que o número 18

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Sim. comando possível é: console.log(+numero+' - '+lista.indexOf(numero)) para EXIBIR todos os índices do array lista (11, de 0 a 10).
*/

/*
//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

//console.log vai retornar:
//*
//**
//***
//****

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/


//EXERCÍCIOS DE ESCRITA CÓDIGO

//Exercício 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array   
//c) Por fim, imprima o array com os nomes dos bichinhos no console

/*
let bichos = Number(prompt('Quantos animais de estimação você tem?'));

if (bichos == 0){
  console.log('Que pena! Você poderia adotar um pet!');
}
else {
  let arrayBichos = [];
  let bicho = 0;
  while (bicho < bichos){
    nomeBicho = prompt('Informe o nome do seu bicho:');
    arrayBichos.push(nomeBicho);
    bicho ++;   //parte mais importante do comando, para ele não repetir infinitamente
  }
  console.log(arrayBichos);
}
*/

/*
//Exercício 1. (COM FOR)

let bichos = Number(prompt('Informe quantos bichos você tem?'));

if (bichos == 0){
  console.log('Que pena! Você poderia adotar um pet!');
}
else{
  let arrayBichos = [];
  for (i = 0; i < bichos; i++){
    var bicho = prompt('Informe nome do seu bicho:');
    arrayBichos.push(bicho);
  }
  console.log(arrayBichos);
}
*/

//Exercício 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma 
//função para cada um dos itens abaixo, realizando as operações pedidas:
    
//a) Escreva um programa que **imprime** cada um dos valores do array original.
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10    
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, 
//**imprima** este novo array.
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal = [10, 15, 20, 5, 25, 1, -30, -1, 30, 35, 200, 40, 45, 50];

/*
//programa a)
function imprimirArray (imprime){
  for(let i = 0; i < imprime.length; i++){
    console.log(imprime[i]);
  }
}
imprimirArray(arrayOriginal);
*/

/*
//programa b)
function dividirArray (divide){
  for(let i = 0; i < divide.length; i++){
    console.log(divide[i] / 10);
  }
}
dividirArray(arrayOriginal);
*/

/*
//programa c)
function criarArray (cria){
  let arrayPares = [];
  for (let i = 0; i < cria.length; i++){
    if (cria[i]%2 == 0){
      arrayPares.push(cria[i]); //vai criar o array com as informações presentes nos índices pares do array recebido (arrayOriginal)
    }
  }
  return console.log(arrayPares);
}
criarArray(arrayOriginal);
*/

/*
//programa d)
function arrayStrings (array){
  let arrayNovo = [];
  for (let i = 0; i < array.length; i++){
    let string = `O elemento do índex ${i} é: ${array[i]}.`
    arrayNovo.push(string);
  }
  return console.log(arrayNovo);
}
arrayStrings(arrayOriginal);
*/

/*
//programa e)
function maiorMenor (array){
  let numeroMenor = array[0];
  let numeroMaior = array[0];
  for (let i = 0; i < array.length; i++){
    let numeroAtual = array[i];
    if (numeroMenor > numeroAtual){
      numeroMenor = numeroAtual;
    }
    else if(numeroMaior < numeroAtual){
      numeroMaior = numeroAtual;
    }
  }
  return console.log(`O menor número é ${numeroMenor}, o maior número é ${numeroMaior}.`)
}
maiorMenor(arrayOriginal);
*/


//DESAFIOS

/*
//1. 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre 
//duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio 
//o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou
//é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

//Vamos jogar!
//O número chutado foi: 3
//Errrrrrrrou, é maior
//O número chutado foi: 18
//Errrrrrrrou, é menor
//O número chutado foi: 15
//Errrrrrrrou, é menor
//O número chutado foi: 11
//Acertou!!
//O número de tentativas foi: 4 

//Um resumo das funcionalidades são:
//a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
//b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado 
//no console:
//- O número chutado, com a mensagem: `O número chutado foi: <número>`
//- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
//c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, 
//`O número de tentativas foi : <quantos chutes o usuário deu>`

let numeroEscolhido = Number(prompt("Escolha um número para jogar"));
console.log('Vamos jogar!');

function recebeNumeros (numeroRecebido){
let numero;
  
  for (let i = 1; numero!==numeroRecebido; i++){ //let i = 1 para contar número de tentativas a partir de 1 
    numero = Number(prompt('Chute um numero:'));
    contagem = i;
    if (numero < numeroRecebido){
      console.log('Errrrrrrrou, chute um número maior!');
      console.log('O número chutado foi: '+numero);
    }
    else if(numero > numeroRecebido){
      console.log('Errrrrrrrou, chute um número menor!');
      console.log('O número chutado foi: '+numero);
    }
    else{
      console.log('Acertou!! O número é '+numero);
    }
  }
  return console.log('O número de tentativas foi: '+contagem);
}

recebeNumeros(numeroEscolhido);
*/

//2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. 
//Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés 
//de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório 
//(entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício 
//anterior.
    
//Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que 
//fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**

/*
//2. 1 (usuário chuta valor gerado pelo computador)
let numeroEscolhido = (Math.floor(Math.random() * 20 + 1)); //número aleatório num intervalo de 1 até 20
//console.log(numeroEscolhido);
console.log('Vamos jogar!');

function recebeNumeros (numeroRecebido){
let numero;
  
  for (let i = 1; numero!==numeroRecebido; i++){ 
    numero = Number(prompt('Chute um numero:'));
    contagem = i;
    if (numero < numeroRecebido){
      console.log('Errrrrrrrou, chute um número maior!');
      console.log('O número chutado foi: '+numero);
    }
    else if(numero > numeroRecebido){
      console.log('Errrrrrrrou, chute um número menor!');
      console.log('O número chutado foi: '+numero);
    }
    else{
      console.log('Acertou!! O número é '+numero);
    }
  }
  return console.log('O número de tentativas foi: '+contagem);
}

recebeNumeros(numeroEscolhido);
*/

/*
//2. 2 (Computador chuta valor digitado pelo usuário)
let numeroEscolhido = Number(prompt('Digite um número entre 1 e 20:')); 
//console.log(numeroEscolhido);
console.log('Vamos jogar!');

function recebeNumeros (numeroRecebido){
let numero;
  
  for (let i = 1; numero!==numeroRecebido; i++){   
    numero = (Math.floor(Math.random() * 20 + 1));
    contagem = i;
    if (numero < numeroRecebido){
      console.log('Errrrrrrrou, chute um número maior!');
      console.log('O número chutado foi: '+numero);
    }
    else if(numero > numeroRecebido){
      console.log('Errrrrrrrou, chute um número menor!');
      console.log('O número chutado foi: '+numero);
    }
    else{
      console.log('Acertou!! O número é '+numero);
    }
  }
  return console.log('O número de tentativas foi: '+contagem);
}

recebeNumeros(numeroEscolhido);
*/
