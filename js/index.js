//1.1 O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName("header");
header[0].style.backgroundColor = "#2E948A";

//1.2 No menu do header, está faltando o link do item Cursos que deveredirecionar para cursos.html
let linkCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");
// console.log(linkCursos);
linkCursos.setAttribute("href", "/cursos.html");

let gps = window.location.pathname;

if (gps === "/index.html") {
	//2.1 No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
	let centralizarIntroducao = document.getElementById("introducao");
	centralizarIntroducao.setAttribute("style", "justify-content: center;");

	// 2.2 Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
	let depoimentos = document.querySelector(".titulo.depoimento h3");
	// console.log(depoimentos);
	depoimentos.innerHTML = "O que falam sobre nós";

	// 2.3 Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
	let titleBlog = document.getElementsByTagName("h3");
	// console.log(titleBlog);
	titleBlog[1].innerHTML = "Mais conteúdo pra você";

	// 2.4 Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas
	let tituloUppercase = document.querySelectorAll(".titulo");
	// for (h3 of tituloUppercase) {
	// 	h3.style.textTransform = "uppercase";
	// }

	tituloUppercase.forEach((x) => (x.style.textTransform = "uppercase"));

	// 2.5 o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
	let buttomTodos = document.querySelector("#todos_posts");
	buttomTodos.setAttribute("href", "/blog.html");

	// 2.6 Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
	let IP = document.querySelector("#investimentos_poupando_independencia");
	let iPDadd = `<div id="independencia"><img src="./imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"> <h2>Independência Financeira</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><a class="comecar_agora" href="./curso.html">começar agora</a></div>`;

	IP.innerHTML = IP.innerHTML + iPDadd;
}

if (gps === "/contato.html") {
	//3.1 O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

	let formaContato = document.querySelector("#formulario form");
	formaContato.setAttribute("action", "sucesso.html");

	//3.2 Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

	let telefone = document.createElement("input");
	let inputTel = document.querySelector("textarea");
	let addedTel = inputTel.insertAdjacentElement("beforebegin", telefone);
	addedTel.setAttribute("type", "phone");
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
}
