'use strict'

/*

1st Challange
Write a program to display n terms of natural numbers and their sum.

n = 5

1, 2, 3, 4, 5 = 15 (sum)

n = 9
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 ===> Display Sum (45)

Solution:

1. Take input of n from user (Prompt)
2. Sum --> accumlate all of numbers
2. For Loop --> (repeat)

*/

// ParseInt & Number are both a kind alternates
// "21929a"
// let number = Number(prompt('Input your Number: '))
// console.log(number)

// let sum = 0
// for (let i = 0; i <= number; i++) {
//   sum = sum + i
//   // sum = 0
//   // i = 0 , sum = 0
//   // i = 1, sum = 1
//   // i = 2, sum = 5
//   // i = 3,
// }

// console.log(sum)

/*

3st Challange
Factorial of number

result = 5, 4, 3, 2, 1 (multiply them all)
result = 120

*/

/*

4th Challange

1. Validate number
2. Check Prime or not

// 2, 3, 5, 7, 11, 13, 15, 23, 29, 31, 37 ............

// 13/1 = 13
// 13/13 = 1

// Rule: It can only be divided by 1, and itself.

// don't check the true condition

27
27/1 = 27
27/27 = 1

/// we have to come counter examples.
1-------number

27/26 = not prime

// */
// let number = 9
// // 2 upto 26

// let flag = true
// for (let i = 2; i < number; i++) {
//   if (number % i === 0) {
//     console.log('Not a Prime Number')
//     flag = false
//   }
//   // number = 5
//   // 9 % 3 => 0
//   // 5 % 3 => No
//   // 5 % 4 => NO

//   // when we are doen dividing it by all number
// }

// if (flag === true) {
//   console.log('Prime Number')
// }

/*
4. Write a program to take an array and print average of all the elements of
array.
*/

// 0 + 1 = 1    ==> addAllNumber + array[0]
// 1 + 2  ==> previousValue + array[1]
// 3 + 3 ===> previousValue + array[2]

// addAllNumber = addAllNumber + array[i]
// addAllNumber = 0 + 1 => 1
// addAllNumber = 1 + 2 ==> 3
// addAllNumber = 3 + 3

// let arrayExample = [1, 2, 3, 4, 5]

// let addAllnumber = 0

// for (let k = 0; k < arrayExample.length; k++) {
//   addAllnumber = addAllNumber + arrayExample[i]
//   // 0, 1, 3, 6, 10
// }
// let avg = addAllnumber / arrayExample.length
// console.log(avg)

/*

Write a program to enter the numbers till the user wants and at the end 
it should display the count of positive, negative and zeros entered.

1. Keep taking input untill users wants to end (option = exit)
2. +ve, -ve, zeros

// 4, 6, -1, 0, 7 , 9 , 0, -3, exit
// 4 +ve, 2 -ve, 2 zero

// 4

// when the condtion can not be defined and repeating depends upon user, then we need to 
just leave the condition empty, with break word.
*/

// let posCount = 0
// let negCount = 0
// let zeroCount = 0
// for (let i = 0; ; i++) {
//   let num = prompt('Enter your Number: ')

//   if (num === 'exit') {
//     // exit our code
//     break
//   } else if (Number(num) < 0) {
//     // logic
//     negCount++
//   } else if (Number(num) > 0) {
//     // logic
//     posCount++
//   } else {
//     // logic
//     zeroCount++
//   }
// }

// console.log('The total of positive numbers  : ', posCount)
// console.log('The total of negative numbers  : ', negCount)
// console.log('The total of zero numbers  : ', zeroCount)

/*

  input = "one zero two one zero one two one three four zero five"
  result = "1010110"

  // Steps

*/

let input = 'one zero two one zero one two one three four zero five'
let parts = input.split(' ')

console.log(parts)

let result = ''
for (let i = 0; i < parts.length; i++) {
  if (parts[i] === 'zero') {
    result = result + '0'
  } else if (parts[i] === 'one') {
    result = result + '1'
  } else {
    // nothing
  }
}

console.log(result)
