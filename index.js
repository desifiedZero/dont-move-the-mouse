let stopMsg = [
    'NO! NO MOVING THE MOUSE.',
    'STOP IT!',
    'IT TICKLES',
    'YAMITE',
    'YAMITE KUDASAI'
];
let mouseMoving = false;

$(document).ready(
    () => {
        let msg = document.querySelector('#msg');
        let timeout;
        document.querySelector('#panel').addEventListener('mousemove', () => {
            let n = Math.floor(Math.random() * 1000) % stopMsg.length;
            if(!mouseMoving){
                msg.innerHTML = stopMsg[n];
                mouseMoving = true;
            }
            if (timeout !== undefined) {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(function () {
                mouseMoving = false;
                msg.innerHTML = 'OKAY, THATS BETTER.';
            }, 500);
        });
    }
);
