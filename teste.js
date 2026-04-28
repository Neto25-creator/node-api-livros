const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")); //PARSE transforma em array

const novoDado = { id: "3", nome: "Livro mais que demais" };

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])); //STRINGIFY transforma em string

console.log(JSON.parse(fs.readFileSync("livros.json")));
