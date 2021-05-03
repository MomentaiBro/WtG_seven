const colors = [
    '#00a7f4',
    '#009d4c',
    '#ffbc20',
    '#f37719',
    '#ca251e',
]

function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span')

    const size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.left = Math.random() * innerWidth + 'px';
    square.style.top = Math.random() * innerHeight + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = bg;

    section.appendChild(square)

    setTimeout(() => {
        square.remove()
    }, 5000)
}

setInterval(createSquare , 150)