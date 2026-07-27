const btnMenu = document.getElementById("btn-menu")

// addEventListener - serve para oberservar ações/eventos em elementos do HTML
// e execurtar uma função quando esse evento acontece
// addEventListener(evento/ação, função)


const navPrincipal = document.getElementById("navecacao-primaria")
const icone = btnMenu.querySelector("i")
console.log(icone)

btnMenu.addEventListener("click", abrirMenu)

function abrirMenu(){
  // navPrincipal.style.display = "block"

  // toggle - adicione/remove classe
 navPrincipal.classList.toggle("nav-ativa")

  // verifica se o menu está aberto. o método contains, retorna verdadeiro ou falso
 const menuAberto = navPrincipal.classList.contains("nav-ativa")
 console.log(menuAberto)

 // Atualiza acessibilidade
 btnMenu.setAttribute("aria-expanded", menuAberto)

 if(menuAberto){
   icone.classList.remove("bi-list")
   icone.classList.add("bi-x")  
 } else {
   icone.classList.remove("bi-x")
   icone.classList.add("bi-list")
 }
}