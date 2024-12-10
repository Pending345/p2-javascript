
const div = document.querySelector('.moving-div');
        
let position = 0;

setInterval(() => {
    position += 5; 
    div.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = 0; 
    }
}, 100);

div.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
});