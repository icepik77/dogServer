let burger = document.querySelector(".header__menu-burger");
let menu = document.querySelector(".header__mobile-menu");

console.log(burger);
burger.onclick = function(event){
    burger.classList.toggle("active");
    menu.classList.toggle("active");

}