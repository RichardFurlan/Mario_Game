const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const reset = document.querySelector('.reset')

reset.addEventListener("click", () => {
    location.reload()
})

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') 
 

    if (pipePosition <= 151 && pipePosition > 0 && marioPosition < 105){

     pipe.style.animation = 'none' 
     pipe.style.left = `${pipePosition}px`

     mario.style.animation = 'none' 
     mario.style.bottom = `${marioPosition}px`

     mario.src = './img/game-over.png'
     mario.style.width = '75px'
     mario.style.marginLeft = '65px'

     

    };

 
}, 10)

