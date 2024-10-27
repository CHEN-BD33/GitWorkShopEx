'use strict'


function onBallClick(el) {
    const newSize = +el.textContent + 50
    const size = newSize > 400 ? 100 : newSize
    el.style.width = el.style.height = (el.textContent = size) + 'px'
}
