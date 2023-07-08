'use strict'

// // Addition Function | Declaration Method to write
// function addTwoNumbers(numberOne, numberTwo) {
//   let addition = numberOne + numberTwo
//   return addition
// }

// // Addition Function | Expression Method to write
// const addTwoNumbers = function(numberOne, numberTwo) {
//   let addition = numberOne + numberTwo
//   return addition
// }

// Addition Function | Arrow Method to write
const addTwoNumbers = (numberOne, numberTwo) => {
  let addition = numberOne + numberTwo
  return addition
}

// call function
let result = addTwoNumbers(20, 40)
console.log(result)

console.log('Introduction')
for (let i = 1; i > 10; i = i + 1) {
  console.log(i)
}
console.log('More Code') // 100 of lines

// addition code
addTwoNumbers(10, 30)

// more code
console.log('JS learning')
console.log('Trying to be best')

// addition code
addTwoNumbers(90, 80)

// Function to calculate ages of students

const calculateAge = function(birthYear) {
  return 2023 - birthYear
}

let ageOfTalha = calculateAge(2001)
console.log('Age of Talha', ageOfTalha)

// let ageOfAdnan = calculateAge(1991)
// console.log('Age of Adnan', ageOfAdnan)

// if (ageOfAdnan > ageOfTalha) {
//   console.log(first)
// } else {
// }

// Fibonacii Series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...........

// let a = 0
// let b = 1

// for (let i = 0; i < 10; i++) {
//   let fibonacii = a + b
//   console.log(fibonacii)
//   a = b
//   b = fibonacii
// }

// function for introduction
const introduction = function(firstName, lastName, age, address) {
  let introductionOfPerson = `My name is ${firstName} ${lastName} having the age of ${age} years old, currently living in ${address}`

  return introductionOfPerson
}

let introOfTalha = introduction('Talha', 'Tariq', 22, 'Pakistan')
console.log(introOfTalha)

let checkEven = function(number) {
  if (number % 2 === 0) {
    return true
    let a =
      'jdhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasjasjkasdhjaskdhsjkafhasjkfhajfkhajkfhajkfhajkfhajkfhakjfafafasfafafafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaf'
  } else {
    return false
  }
}

console.log('4 is even : ', checkEven(4))
console.log('11 is even: ', checkEven(11))
