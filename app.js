//Exibir mensagem no node
/*console.log("Introdução ao Node.js");
var nome = "michel";

function exibirMensagem(nome){
    console.log("Olá",nome);
}
exibirMensagem(nome);*/

//exibir texto colorido npm install cli-color
/*
var clc = require("cli-color");
console.log(clc.green("Mensagem verde;"));
console.log(clc.red('Text in red'));*/


// criando modulos
/*
var funcoes = require("./funcoes.js");

var resultado = funcoes.validarUsuario("michel", "123");

console.log(resultado);*/

//criando aplicação web e rodando no servidor
/*var http = require("http");

http.createServer(function(request, response){
    response.write("Primeiro passos com Node.js");
    response.end();
}).listen(8081);

console.log("Servidor rodado em http://localhost:8081");*/

var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("index.html", function(erro, conteudo){
        if(erro){
            console.log(erro);
        }else{
            response.write(conteudo);
        }
        response.end();
    })

}).listen(8081)

console.log("Servidor rodando em http://localhost:8081")