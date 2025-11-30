var navMenu = document.getElementById("nav-menu");
var mobileBtn = document.getElementById("mobile-btn");
function ToggleResponsive() {
   if (navMenu.className === "nav-menu") {
    // Menu fechado -> abrir e mostrar X
    navMenu.className = "nav-menu-responsive";
    mobileBtn.innerHTML = '<i class="fas fa-times"></i>'; 
  } else {
    // Menu aberto -> fechar e mostrar barras
    navMenu.className = "nav-menu";
    mobileBtn.innerHTML = '<i class="fas fa-bars"></i>'; 
  }
}