'use strict'


function onBallClick(el) {
     el.style.width = el.style.height = (el.textContent = +el.textContent + 50) + 'px'
}
