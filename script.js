const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});

navItems.forEach(function(item){
    item.addEventListener("click",function(){
        navLinks.classList.remove("active");
    });
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();