'use strict'

/*

Right Angle Triangle
*     ----> 1 (i = 0) 
**    ----> 2 (i = 1)
***   ----> 3 (i = 2)
****  ----> 4 (i = 3)

// inner loop
start = 0; end < 1  (*)
start = 0; end < 2 (**)
start = 0; end = 3 (***)
start = 0; end = 4 (****)
*/

for (let i = 0; i < 5; i++) {
  let line = ''
  for (let j = 0; j < i + 1; j++) {
    line = line + '*'
  }

  console.log(line)
}
/*

Dry - Run

First Iteration : i = 0
j = 0; J < 1   (*)


i = 1
j = 0; j<2; ()
 for (let j = 0; j < i+1; j++){
    console.log('*')
  }
  **

i = 2
j = 0; j<3
 for (let j = 0; j < 3; j++){
    console.log('*')
  }
  ***

  
i = 3
j = 0; j<4
 for (let j = 0; j < 4; j++){
    console.log('*')
  }
  ****

i = 4
j = 0; j<5
 for (let j = 0; j < 5; j++){
    console.log('*')
  }
  *****

*/

/*

input = [2,5,3,8,4,1]

answer = [14, 9]

*/

// Hint
// Loop array[i]

const sumOfArray = function(input) {
  let answer = []

  let sumOfEvent = 0
  let sumOfOdd = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sumOfEvent = sumOfEvent + input[i]
    } else {
      sumOfOdd = sumOfOdd + input[i]
    }
  }

  answer.push(sumOfEvent)
  answer.push(sumOfOdd)

  return answer
}

const result = sumOfArray([2, 5, 3, 8, 4, 1])
console.log(result)

/*

parameter : input, number
input = [8, 7, 4]
number = 3

Add 2 in odd number
Subtract 2 from even number
result = [6, 9, 2]

-- next
result = [4, 11, 0]

-- next
result = [2, 13, -2]

*/

const transformArray = function(input, number) {
  for (let j = 0; j < number; j++) {
    // internal loop : solving one task
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        input[i] = input[i] - 2
      } else {
        input[i] = input[i] + 2
      }
    }
  }

  return input
}

const resultArray = transformArray([8, 7, 4], 3)
console.log(resultArray)

/*

  names = ["talha", "adnan", "david"]
  result = ["Talha", "Adnan", "David"]


  names = ["TALHA", "AdNan", "dAvId"]
  result = ["Talha", "Adnan", "David"]

*/

const capitalizeNames = function(names) {
  for (let i = 0; i < names.length; i++) {
    names[i] =
      names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()
  }

  console.log(names)
}

capitalizeNames(['tALHA', 'adNan', 'dAvId'])

/*

// substr & slice

a = Hello
a.slice(0) ==> Hello
a.slice(1) ==> ello
a.slice(2) ===> ll0

names[0] = 'tALHA'



names[i].chartAT(0).toUppercase() = T + alha ==> Talha
names[i].slice(1).toLowerCase() = ALHA = alha


names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()

names[0] = 'T' + 'alha'
names[0] = Talha
*/

/*

Problem:

input = ["word", "talha", "pakistan"], character (a)

result : how many times a appears in this array
occurance of a = 4 times
 
*/

const findOccurance = function(input, letter) {
  let count = 0

  // logic
  for (let i = 0; i < input.length; i++) {
    // input = talha
    for (let j = 0; j < input[i].length; j++) {
      if (input[i].charAt(j) === letter) {
        count = count + 1
      }
    }
  }
  return count
}

const countResult = findOccurance(['word', 'talha', 'pakistan'], 'j')
console.log(countResult)
