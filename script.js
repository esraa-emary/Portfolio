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
        text.style.color = '#9e225c';
        links.forEach(link => link.style.color = '#9e225c');
        p.forEach(effect => effect.style.color = '#9e225c');
        h3.forEach(effect => effect.style.color = '#9e225c');
        h1.forEach(effect => effect.style.color = '#9e225c');
    } else {
        text.style.color = 'rgb(75, 124, 196)';
        links.forEach(link => link.style.color = 'rgb(75, 124, 196)');
        p.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
        h3.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
        h1.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleText').style.color = '#9e225c';
    document.querySelectorAll('a').forEach(link => link.style.color = '#9e225c');
    document.querySelectorAll('h2').forEach(effect => effect.style.color = '#9e225c');
    document.querySelectorAll('h1').forEach(effe => effe.style.color = '#9e225c');
});

// ====================================== home ====================================== //

document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 15;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'https://github.com/esraa-emary/photos/blob/main/blue.png?raw=true';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 97 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowContainer.appendChild(snowflake);
        const snowflake2 = document.createElement('img');
        snowflake2.src = 'https://github.com/esraa-emary/photos/blob/main/pink.png?raw=true';
        snowflake2.classList.add('snowflake2');
        snowflake2.style.left = Math.random() * 97 + 'vw';
        snowflake2.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake2.style.opacity = Math.random();
        snowContainer.appendChild(snowflake2);
    }
});
