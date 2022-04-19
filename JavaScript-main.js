

function clicar(){
    document.getElementById("Agradecimento").innerHTML = "<b><i>Obrigado por clicar</b></i>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigada por clicar");
}


function redirecionar(){
    window.open("https://br.pinterest.com/");
    //window.location.href = "https://br.pinterest.com/";
}

function Trocar(elemento){
    elemento.innerHTML = "<b><i>Obrigada por passar o mouse</i></b>";
    //document.getElementById("Mousemove").innerHTML = "<b><i>Obrigada por passar o mouse</i></b>";
    //alert("Trocar texto");
}

function Voltar(elemento){
    elemento.innerHTML = "<b><i>Passe o mouse aqui</i></b>";
    //document.getElementById("Mousemove").innerHTML = "<b><i>Passe o mouse aqui</i></b>";
}

function load(){
    alert("Página carregada");
}


function Função_Change(elemento){
    console.log(elemento.value());
}









/*function soma(n1,n2){
    return n1+n2;
}
/*
var validar = 0;
function validaIdade(idade){
     //validar;
    if(idade >=18){
        validar =true
    }else{
        validar=false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
//console.log (validaIdade(idade));
*/

/*
function setReplace(frase,nome, novo_nome){
    retur frase.replace(nome,novo_nome);
}
*/
//alert(soma(5,10));
//alert(setReplace("Vai Japão","Japão", "Brasil"));





/*
var d = new Date();
alert(d.getDay()+10);
alert(d.getMonth()+1);
alert(d.getFullYear());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count =0;
while(count <= 5 ){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
};
*/


/*
var idade =  prompt("Qual sua idade? ");
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade ");
}else{
    alert("Menor de idade")
};
*/




/*var frutas = [{nome:"Maça", cor:"Vermelha"} , {nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/


//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.length());
//console.log(lista[1]);
//alert(lista[1]);



//var nome = "Bianca de Oliveira";
//var idade = 18;
//var idade2 = 10;
//var n1 =  5; exemplo2
//var n2 = 3; exemplo2
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem "  + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 * n2); exemplo2
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));