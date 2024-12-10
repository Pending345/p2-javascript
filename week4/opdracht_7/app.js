
const div = document.querySelector('.moving-div');
        
let position = 0;

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

setInterval(() => {
    position += 5; 
    div.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = 0; 
    }
}, 100);

div.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = colors[randomIndex];
});