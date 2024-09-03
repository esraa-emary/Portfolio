// ====================================== header ====================================== //

let isDarkMode = false;

function toggleMode() {
    const text = document.getElementById('toggleText');
    const links = document.querySelectorAll('a');
    const p = document.querySelectorAll('p');
    const h3 = document.querySelectorAll('h2');
    const h1 = document.querySelectorAll('h1');
    const logo = document.getElementById('name');

    if (isDarkMode) {
        text.style.color = '#ee84af';
        links.forEach(link => link.style.color = '#ee84af');
        p.forEach(effect => effect.style.color = '#ee84af');
        h3.forEach(effect => effect.style.color = '#ee84af');
        h1.forEach(effect => effect.style.color = '#ee84af');
    } else {
        text.style.color = '#95e9c6';
        links.forEach(link => link.style.color ='#95e9c6');
        p.forEach(effect => effect.style.color = '#95e9c6');
        h3.forEach(effect => effect.style.color = '#95e9c6');
        h1.forEach(effect => effect.style.color = '#95e9c6');
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleText').style.color = '#ee84af';
    document.querySelectorAll('a').forEach(link => link.style.color = '#ee84af');
    document.querySelectorAll('h2').forEach(effect => effect.style.color = '#ee84af');
    document.querySelectorAll('h1').forEach(effe => effe.style.color = '#ee84af');
});

// ====================================== home ====================================== //

document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 15;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'https://github.com/esraa-emary/photos/blob/main/blu.png?raw=true';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 97 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowContainer.appendChild(snowflake);
        const snowflake2 = document.createElement('img');
        snowflake2.src = 'https://github.com/esraa-emary/photos/blob/main/pin.png?raw=true';
        snowflake2.classList.add('snowflake2');
        snowflake2.style.left = Math.random() * 97 + 'vw';
        snowflake2.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake2.style.opacity = Math.random();
        snowContainer.appendChild(snowflake2);
    }
});

document.getElementById("expand-cer").addEventListener("click", function() {
    var myDiv = document.getElementById("cer-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

document.getElementById("expand-code").addEventListener("click", function() {
    var myDiv = document.getElementById("code-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

document.getElementById("expand-front").addEventListener("click", function() {
    var myDiv = document.getElementById("front-exp");
    if (myDiv.style.display === "" || myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

document.querySelector('.navbar__toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
