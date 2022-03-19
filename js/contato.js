//3.1 O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

let formaContato = document.querySelector("#formulario form");
formaContato.setAttribute("action", "sucesso.html");

//3.2 Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

let telefone = document.createElement("input");
let inputTel = document.querySelector("textarea");
let addedTel = inputTel.insertAdjacentElement("beforebegin", telefone);
addedTel.setAttribute("type", "email");
addedTel.setAttribute("required", "");
addedTel.setAttribute("placeholder", "Fone");

//3.3 O campo de mensagem está ultrapassando o tamanho do elemento pai.
inputTel.style.boxSizing = "border-box";

//3.4 O botão não está do tamanho adequado, precisa ter uma largura maior;

let btnContato = document.querySelector("#enviar");
// console.log(btnContato);
btnContato.style.width = "150px";
