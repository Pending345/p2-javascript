
const div = document.querySelector('.moving-div');
        
let position = 0;

setInterval(() => {
    position += 5; 
    div.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = 0; 
    }
}, 100);