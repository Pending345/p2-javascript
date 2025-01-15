
const body = document.body;

const goButton = document.createElement('button');
goButton.innerText = 'Go';
goButton.style.fontSize = '24px';
goButton.style.padding = '10px 20px';
body.appendChild(goButton);

let startTime = 0;
let endTime = 0;

goButton.addEventListener('click', () => {

    goButton.style.display = 'none';

    const redScreen = document.createElement('div');
    redScreen.style.width = '100vw';
    redScreen.style.height = '100vh';
    redScreen.style.backgroundColor = 'red';
    redScreen.style.position = 'fixed';
    redScreen.style.top = '0';
    redScreen.style.left = '0';
    body.appendChild(redScreen);

    const delay = Math.random() * 10000;

    setTimeout(() => {
        redScreen.style.backgroundColor = 'green';
        startTime = Date.now();

        redScreen.addEventListener('click', () => {
            endTime = Date.now();

            const reactionTime = endTime - startTime;

            body.removeChild(redScreen);

            alert(`Your reaction time was ${reactionTime} ms.`);

            goButton.style.display = 'inline-block';
        }, { once: true });
    }, delay);
});