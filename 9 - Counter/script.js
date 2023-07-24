'use strict'

// Select All variable
let value = document.querySelector('.value')
let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')

console.log(value)
let count = 0

value.innerText = count

function increment() {
  count++
  value.innerText = count
}
function decrement() {
  if (count <= 0) {
    alert('Count Can not be less than 0')
  } else {
    count--
    value.innerText = count
  }
}

// Add Event Listeners
plusBtn.addEventListener('click', increment)
minusBtn.addEventListener('click', decrement)

// Advance | REACT, NODE, ......
