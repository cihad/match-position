import { matchPosition } from '../index.js'

function matchRectangles() {
  const { a, b } = window
  
  const {
    aPosSelect: { value: aPos },
    bPosSelect: { value: bPos }
  } = window['control-form']
  
  // Most important section
  matchPosition({ a, aPos, b, bPos })
}

window['control-form'].addEventListener('submit', e => {
  e.preventDefault()
  matchRectangles()
})

const stopInterval = () => clearInterval(interval);

window.matchRectangles = matchRectangles
window.stopInterval = stopInterval

const interval = setInterval(() => {
  const { aPosSelect, bPosSelect } = window['control-form']
  setRandomOption(aPosSelect)
  setRandomOption(bPosSelect)
  matchRectangles()
}, 2000)

const random = length => Math.floor(Math.random() * length)
const setRandomOption = select => {
  select.value = select.options[random(select.options.length)].value
}