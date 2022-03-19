//1.1 O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName("header");
header[0].style.backgroundColor = "#2E948A";

//1.2 No menu do header, está faltando o link do item Cursos que deveredirecionar para cursos.html
let linkCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");
// console.log(linkCursos);
linkCursos.setAttribute("href", "/cursos.html");

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
