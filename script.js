// ====================================== header ====================================== //

let isDarkMode = false;

function toggleMode() {
    const text = document.getElementById('toggleText');
    const links = document.querySelectorAll('a');
    const p = document.querySelectorAll('p');
    const h3 = document.querySelectorAll('h3');
    const h1 = document.querySelectorAll('h1');
    const logo = document.getElementById('name');
    const logo2 = document.getElementById('name2');

    if (isDarkMode) {
        text.style.color = '#9e225c';
        links.forEach(link => link.style.color = '#9e225c');
        p.forEach(effect => effect.style.color = '#9e225c');
        h3.forEach(effect => effect.style.color = '#9e225c');
        h1.forEach(effect => effect.style.color = '#9e225c');
        logo.style.color = '#000';
        logo2.style.color = '#000';
    } else {
        text.style.color = 'rgb(75, 124, 196)';
        links.forEach(link => link.style.color = 'rgb(75, 124, 196)');
        p.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
        h3.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
        h1.forEach(effect => effect.style.color = 'rgb(75, 124, 196)');
        logo.style.color = '#000';
        logo2.style.color = '#000';
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleText').style.color = '#9e225c';
    document.querySelectorAll('a').forEach(link => link.style.color = '#9e225c');
    document.querySelectorAll('h3').forEach(effect => effect.style.color = '#9e225c');
    document.querySelectorAll('h1').forEach(effe => effe.style.color = '#9e225c');
    document.getElementById('name').style.color = '#000';
    document.getElementById('name2').style.color = '#000';
});
