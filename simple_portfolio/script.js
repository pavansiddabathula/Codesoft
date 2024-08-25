document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.getElementById("nav-links");
    const header = document.querySelector('header'); 

    menuIcon.addEventListener("click", function () {
        navLinks.style.display = "flex";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        navLinks.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = header.offsetHeight; 

            window.scrollTo({
                top: targetElement.offsetTop - offset + 20, 
                behavior: 'smooth'
            });

        
            if (window.innerWidth <= 768) {
                navLinks.style.display = "none";
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";
            }
        });
    });
});
