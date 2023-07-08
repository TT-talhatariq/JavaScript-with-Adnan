'use strict'

let numbers = [1, 5, 20, 67, 82]
console.log('Array: ', numbers)

console.log('First Element: ', numbers[0])
console.log('Second Element: ', numbers[1])
console.log('Third Element: ', numbers[2])
console.log('Forth Element: ', numbers[3])
console.log('Fifth Element: ', numbers[4])

console.log('Sixth Element: ', numbers[10])

// Add a new number
numbers.push(90) // function call
numbers.push(19)

console.log('Added Elements into Array: ', numbers)

numbers.pop()
console.log('Removed Element from array', numbers)

numbers.unshift(6)
console.log('Added in Start:', numbers)

numbers = numbers.sort() // return value - array
console.log('After Sorting: ', numbers)

// search a element
let index = numbers.indexOf(67)
console.log('Index:', index)

// slice | length

// Arrays  + Functions

const add = function(n1, n2) {
  return n1 + n2 // result (one number)
}

// Make a array of 10 numbers & pass it into a function and then multiply each by 2

const multiplyByTwo = function(array) {
  console.log(array)

  for (let i = 0; i < 3; i++) {
    console.log(array[i] * 2)
  }

  return array
}

let number = [4, 3, 7]
multiplyByTwo(number)

// There is array of 9 numbers. Take average of each three and put the result into new array. And do it by making a function

let averagrOfThree = function(array) {
  let average = []

  for (let i = 0; i < 9; i = i + 3) {
    let avg = (array[i] + array[i + 1] + array[i + 2]) / 3

    average.push(avg)
  }

  return average
}

let num = [5, 3, 4, 9, 8, 5, 6, 0, 7]
let arrayOfAverage = averagrOfThree(num)
console.log(arrayOfAverage)

// let average = [first, second, third]
