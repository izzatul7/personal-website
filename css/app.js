const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classlist.toggle('active');
    mobile_menu.classlist.toggle('active');
})