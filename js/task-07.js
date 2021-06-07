const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

const resize = () => {
    text.style.fontSize = input.value + 'px';
 };

input.addEventListener('input', resize);