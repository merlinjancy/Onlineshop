//for menubar
let menu=document.querySelector('menuBar');
let navBar=document.querySelector('navBar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');

});

Window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}