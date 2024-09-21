let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                    link.classList.remove('active');
                }
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    let top = window.scrollY;
    let windowHeight = window.innerHeight;
    let docHeight = document.documentElement.scrollHeight;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
    
    if (window.scrollY + windowHeight >= docHeight - 300) {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector('header nav a[href*=contact]').classList.add('active');
    }
};

document.getElementById("expand-cer").addEventListener("click", function() {
    var myDiv = document.getElementById("cer-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "flex";
        myDiv.style.flexDirection = "column";
        myDiv.style.gap = "1rem";
    } else {
        myDiv.style.display = "none";
    }
});

document.getElementById("expand-code").addEventListener("click", function() {
    var myDiv = document.getElementById("code-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "flex";
        myDiv.style.flexDirection = "column";
        myDiv.style.gap = "1rem";
    } else {
        myDiv.style.display = "none";
    }
});

document.getElementById("expand-front").addEventListener("click", function() {
    var myDiv = document.getElementById("front-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "flex";
        myDiv.style.flexDirection = "column";
        myDiv.style.gap = "1rem";
    } else {
        myDiv.style.display = "none";
    }
});
