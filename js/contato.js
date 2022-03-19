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

//3.5 Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
let comments = `<section class="titulo depoimento">
				<h3>Depoimentos</h3>
			</section><section id="falam_sobre">
				<div class="depoimentos">
					<img src="./imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim" />
					<p>
						”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam.”
						<br />
						<br />
						Wally, 25
					</p>
				</div>

				<div class="depoimentos">
					<img src="./imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim" />
					<p>
						”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam.”
						<br />
						<br />
						Jaden Smith, 23
					</p>
				</div>

				<div class="depoimentos">
					<img src="./imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim" />
					<p>
						”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam.”
						<br />
						<br />
						Whoopi Goldberg, 37
					</p>
				</div>

				<div class="depoimentos">
					<img src="./imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim" />
					<p>
						”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam.”
						<br />
						<br />
						Janes Joplin, 29
					</p>
				</div>
			</section>`;

let addComments = document.querySelector("main");
addComments.innerHTML += comments;

document.querySelector(".formulario").style.minHeight = "30px";

document.querySelector(".titulo.depoimento").style.margin = "30px auto";
