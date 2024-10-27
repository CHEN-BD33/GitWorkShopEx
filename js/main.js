'use strict'


function onBallClick(el, maxDiameter) {
    const newSize = +el.textContent + getRandomInt(20, 60)
    const size = newSize > maxDiameter ? 100 : newSize
    el.style.width = el.style.height = (el.textContent = size) + 'px'
    el.style.backgroundColor = getRandomColor()
}
