


function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigada por clicar</b>";
    //console.log (document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://globallab.org/en/#.X4iBwNBKjIU/");
    //window.location.href="https://globallab.org/en/#.X4iBwNBKjIU/";
}


function trocar(elemento){
    elemento.innerHTML="Obrigada por passar o mouse";
   // alert ("trocar texto");
    //document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
     //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
 }

 function load(){
    alert ("Pagina carregada!");
}


function funcaoChange(elemento){
    console.log (elemento.value);
}


/*
function soma (n1, n2){
    return n1+n2;
}
*/


/*
function validaIdade(idade){
    var validar;
    if(idade>= 18){
        validar= true
    }else{
        validar= false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade");
console.log(validaIdade(idade));


//alert(soma(5,10));
*/




/*
var d =new Date();
console.log("Hoje é " + d.getDate() + "/" + d.getMonth()+1);
*/


/*
var d =new Date();
alert(d.getDay());
alert(d.getHours());
*/

/*
var count;
for(count=0; count <=5; count ++){
    alert(count);
};
*/


/*
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count = + +;
};
*/



/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade!");
}else{
    alert("menor de idade!")
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log (frutas);
alert(frutas[1].nome);
*/



/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log (fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop("");
//console.log (lista.length);
//console.log (lista.reverse());
//console.log (lista[0]);
//console.log (lista);
//console.log (lista.toString());
//console.log (lista.join(" | "));

//var nome = "Mayla Santos";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log (n1 * n2);
//console.log (frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));