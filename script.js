// ==================== Home ====================
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 15;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'https://e7.pngegg.com/pngimages/512/999/png-clipart-dot-dot-thumbnail.png';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowContainer.appendChild(snowflake);
        const snowflake2 = document.createElement('img');
        snowflake2.src = 'data:image/png;base64,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';
        snowflake2.classList.add('snowflake2');
        snowflake2.style.left = Math.random() * 100 + 'vw';
        snowflake2.style.animationDuration = (Math.random() * 10 + 2) + 's';
        snowflake2.style.opacity = Math.random();
        snowContainer.appendChild(snowflake2);
    }
});

let isDarkMode = false;

function toggleMode() {
    const body = document.body;
    const image = document.getElementById('toggleImage');
    const text = document.getElementById('toggleText');
    const links = document.querySelectorAll('a');
    const effects = document.querySelectorAll('animate');
    const effe = document.querySelectorAll('h1');
    const link = document.getElementById('logo');
    const lin = document.getElementById('toggleText');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        text.style.color = 'rgb(202, 117, 170)';
        links.forEach(link => link.style.color = 'rgb(202, 117, 170)');
        effects.forEach(effect => effect.style.color = 'rgb(202, 117, 170)');
        effe.forEach(effect => effect.style.color = '#000');
        link.style.color = 'rgb(202, 117, 170)';
        lin.style.backgroundColor = '#000';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        text.style.color = '#000';
        links.forEach(link => link.style.color = '#000');
        effects.forEach(effect => effect.style.color = '#000');
        effe.forEach(effect => effect.style.color = 'rgb(202, 117, 170)');
        logo.style.color = '#000';
        lin.style.backgroundColor = 'rgb(202, 117, 170)';
    }

    isDarkMode = !isDarkMode;
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-mode');
    document.getElementById('toggleText').style.color = 'rgb(202, 117, 170)';
    document.querySelectorAll('a').forEach(link => link.style.color = 'rgb(202, 117, 170)');
    document.querySelectorAll('animate').forEach(effect => effect.style.color = 'rgb(202, 117, 170)');
    document.querySelectorAll('h1').forEach(effe => effe.style.color = '#000');
    document.getElementById('logo').style.color = 'rgb(202, 117, 170)';
    document.getElementById('toggleText').style.backgroundColor = '#000';
});





// ==================== Anout ====================


// ==================== Projects ====================


// ==================== Contact ====================


// ==================== Footer ====================


