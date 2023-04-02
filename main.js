let menuBtnMobile = document.querySelector(".menu-mobile");
let navMenuMob = document.querySelector(".nav-mob");

let searchBtn = document.querySelector(".header-content__search");
let searchBlock = document.querySelector(".search-block");
const showMenu = () => {
    navMenuMob.classList.toggle("open");
}

const showSearch = () => {
    searchBlock.classList.toggle("show");
}

const test = () => {
    alert("Hello");
}

menuBtnMobile.onclick = showMenu;
searchBtn.onclick = showSearch;