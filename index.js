'use strict';

console.log('funguju!');


const spustMinutku = (event) => {
    event.preventDefault()
    let time = Number(document.querySelector('.time-input').value)

    const setSekundy = document.querySelector('.alarm__seconds')
    const setAlarm = document.querySelector('.alarm')

    setAlarm.classList.remove('alarm--ring')

    setSekundy.textContent = String(time)

    const odpocet = () => {
        if (time > 0) {
                time -= 1
             setSekundy.textContent = String(time)
            }
        if (time <=0) {
                clearInterval(casovac)
                setAlarm.classList.add('alarm--ring')
                document.querySelector('audio').play()
            }
    }

    const casovac = setInterval(odpocet, 1000)
}

const setFormular = document.querySelector('.controls')
setFormular.addEventListener('submit', spustMinutku)