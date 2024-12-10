const div = document.querySelector('.moving-div');

        const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

        let topPosition = window.innerHeight / 2;
        let leftPosition = window.innerWidth / 2;
        const moveStep = 10;

        div.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            div.style.backgroundColor = colors[randomIndex];
        });

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp': // Pijl omhoog
                case 'w':       // W-toets
                    topPosition -= moveStep;
                    break;
                case 'ArrowDown': // Pijl omlaag
                case 's':         // S-toets
                    topPosition += moveStep;
                    break;
                case 'ArrowLeft': // Pijl naar links
                case 'a':         // A-toets
                    leftPosition -= moveStep;
                    break;
                case 'ArrowRight': // Pijl naar rechts
                case 'd':          // D-toets
                    leftPosition += moveStep;
                    break;
            }

            topPosition = Math.max(0, Math.min(topPosition, window.innerHeight - 50));
            leftPosition = Math.max(0, Math.min(leftPosition, window.innerWidth - 50));

            div.style.top = topPosition + 'px';
            div.style.left = leftPosition + 'px';
        });