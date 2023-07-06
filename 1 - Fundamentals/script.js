'use strict'

// console.log('Hello, First JS Code')
// console.log('2nD ')

// // Variables of Talha's Data
// let firstName = 'value'
// console.log(firstName) // declaration/defination

// firstName = 'Talha'

// let lastName = 'Tariq'
// let age = 12
// let university = 'PU, Lahore'
// let bankBalance = 12.02
// let isMarried = false

// // object
// let informationOfTalha = {
//   firstName: 'Talha',
//   lastName: 'Tariq',
//   age: 22,
//   isMarried: false,
// }

// console.log(informationOfTalha.lastName)

// // This is my Introduction String
// // Concatenation

// /*
// Talha is a student of PU, Lahore
// and this is his introduction string
// that we concatinate using + operator
// by combining all variables
// */

// let introduction =
//   'My Name is ' +
//   firstName +
//   ' ' +
//   lastName +
//   ', married ' +
//   isMarried +
//   ', and age of ' +
//   age +
//   ' years old, studying in ' +
//   university

// // Printing Introduction
// console.log(introduction)

// let introductionSecond = `My name is ${firstName} ${lastName}, and age of ${age} years old, isMarried ${isMarried} studying in ${university}`

// // Operators
// let numberOne = 20
// let numberTwo = 40

// console.log('Addition: ', numberOne + numberTwo)
// console.log('Substraction: ', numberTwo - numberOne)
// console.log('Divide: ', numberTwo / numberOne)
// console.log('Multiply: ', numberOne * numberTwo)

// // IF Else Statements
// let rain = false

// if (rain == true) {
//   console.log('Talha will Play')
// } else {
//   console.log('Talha will Rest')
// }

// let kidAge = 20
// if (kidAge > 18) {
//   console.log('Can Join Adventure')
// } else {
//   console.log('Can not Join Us')
// }

// let text = '12'
// let number = 12

// if (text === number) {
//   // text => number == number = true
//   // number => text == text = true
//   console.log('text is equal to number')
// } else {
//   console.log('text is not equal to number')
// }

// let numberTest = 23
// let stringTest = String(numberTest)

// console.log(typeof numberTest)
// console.log(typeof stringTest)

let myAge = 11

// Rule of Game: Only the person can join who has age between 12 to 18

if (myAge > 12 && myAge < 18) {
  console.log('Talha can Play Game')
} else {
  console.log('Talha Can not Play Game')
}

// OR Operator

let isRain = false
let isCloudy = false

// Statement: If it is raining or cloudy, I will go to school, otherwise I will stay at Home.

if (isRain === true || isCloudy === true) {
  console.log('I will go to School')
} else {
  console.log('I will not go to School')
}

let mom = true
let father = true
let brother = true

// Statement: if I get a candy either by both of my parents or by my brother, then I will go to school.

if ((mom === true && father === true) || brother === true) {
}

//Loops

// for (let i = 0; i < 100; i++) {
//   console.log('Talha', i)
// }

// Table of 2
for (let i = 1; i <= 10; i++) {
  console.log(`2 * ${i} = ${2 * i}`)
}

// Scenrio: Print the name of Mother One time and it's son 6 times.

// And repeat this logic 5 times.

for (let i = 0; i < 5; i++) {
  console.log('Mother')
  for (let j = 0; j < 1; j++) {
    console.log('Talha')
  }
}

let talhaAge = 10
if (talhaAge > 18) {
  console.log('Talha can join this community')
} else {
  console.log('Talha Can Not')
}

let number = 10
let numberTwo = 0

console.log(number / numberTwo)
