// let btn__extend = document.querySelector("#btn-extend--electronics");

// let menu__extend__electronics = document.querySelector("#menu__extend__electronics");
// let btn__extend__menu = document.querySelector('.bi-list');
// let body__main = document.querySelector('body');
// let extend__menu = document.querySelector('.menu-extend ');
// let close__menu = document.querySelector('.bi-x-circle');
// let btn__navbar = document.querySelector('#nav-icon');
// function openNavbar(){
//     btn__navbar.classList.remove("bi-list");
//     btn__navbar.classList.add("bi-x-circle");
//     extend__menu.style.transform = "translateX(0%)";
//     extend__menu.style.opacity = "1";
//     close__menu.style.display = "block";
// }
// function closeNavbar(){
//     btn__navbar.classList.remove("bi-x-circle");
//     btn__navbar.classList.add("bi-list");
//     extend__menu.style.transform = "translateX(100%)";
//     extend__menu.style.opacity = "0";
//     close__menu.style.display = "none";
// }
// btn__navbar.onclick = function(){
//     if(extend__menu.style.transform !==  "translateX(0%)"){
//         openNavbar();
//     }else{
//         closeNavbar();
//     }
// }

var btnToggle = document.querySelector('.btn-toggle');
var toggle_element = document.querySelector('.btn-toggle__btn-arrow');
var price_month = document.querySelector('#price-month');
var price_year = document.querySelector('#price-year');
console.log(toggle_element);
let flag = 1;
btnToggle.onclick = function(){
    if( flag === 1){
        toggle_element.style.left = "50%";
        price_month.innerHTML = "200";
        price_year.innerHTML = "500";
        flag = 0 ;
    }
    else if( flag === 0){
        toggle_element.style.left = "10%";
        price_month.innerHTML = "19";
        price_year.innerHTML = "49";
        flag = 1 ;
    }
}

