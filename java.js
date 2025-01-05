let hamMenu = document.querySelector('.ham-menu')

let hamMenuIcon = document.querySelector('.fas.fa-bars.hamburger');

let cancelIcon = document.querySelector(".ham-menu .icon");

let navMenu = document.querySelector('menu-wrapper');

hamMenuIcon.addEventListener( 'click', () =>{
    console.log(hamMenu.classList)
    hamMenu.classList.toggle('active');
    // navMenu.classList.remove('active');
    hamMenuIcon.style.display = ("none");
 } 
)


cancelIcon.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    hamMenuIcon.style.display = ("flex");
  
})

