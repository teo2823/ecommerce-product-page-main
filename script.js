//hamburger menu
let burgerBtn = document.querySelector('.burgermenu');
let menuNav = document.querySelector('.nav');
let blurBack = document.querySelector('.blurbackground');
let closeBtn = document.querySelector('.iconClose');

//function to open menu
burgerBtn.addEventListener('click', ()=>{
    menuNav.style.left = '0';
    blurBack.style.display = 'block';

})

//function to close menu 
const closeMenu = ()=>{
    menuNav.style.left = '-200px';
    blurBack.style.display = 'none';
}

closeBtn.addEventListener('click', closeMenu);
blurBack.addEventListener('click', closeMenu);