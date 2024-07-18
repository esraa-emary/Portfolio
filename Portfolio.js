document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'https://e7.pngegg.com/pngimages/512/999/png-clipart-dot-dot-thumbnail.png';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowContainer.appendChild(snowflake);
    }
});

let isDarkMode = false;

function toggleMode() {
    const body = document.body;
    const image = document.getElementById('toggleImage');
    const text = document.getElementById('toggleText');
    const links = document.querySelectorAll('a');
    const effects = document.querySelectorAll('animate');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        image.src = 'https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/patterns/36/5e39c82813558698.jpg';
        text.style.color = 'rgb(173, 78, 103)';
        links.forEach(link => link.style.color = 'rgb(173, 78, 103)');
        effects.forEach(effect => effect.style.color = 'rgb(173, 78, 103)');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3stcutdnf7XqmHZQJDoauul1FiQqifpGJLnEHX6VqMnsk8HMopx3xd4J8AgAfZa9ngM&usqp=CAU';
        text.style.color = '#4676b4';
        links.forEach(link => link.style.color = '#4676b4');
        effects.forEach(effect => effect.style.color = '#4676b4');
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-mode');
    document.getElementById('toggleText').style.color = 'rgb(173, 78, 103)';
    document.querySelectorAll('a').forEach(link => link.style.color = 'rgb(173, 78, 103)');
    document.querySelectorAll('animate').forEach(effect => effect.style.color = 'rgb(173, 78, 103)');
});

