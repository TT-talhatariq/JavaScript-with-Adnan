'use strict'

/*

1st Challange

Find the smallest number from the Array of 5 numbers. 

array = [7, 2, 19, 5, 8]
largest = 0
7 > 0 ?  largest = 7
2 > 7 ? largest = 7
19 > 7 ? largest = 19
5 > 19 ? largest = 19
8 > 19 ? largest = 19

output(largest)

largest = -1931937193
smallest = 822342874
*/

let array = [7, 2, 19, 5, 8]

let smallest = 0

// 7 < 0 ? 7
// 2 < 7 ? 2
// 19 < 2 ? 2
// 5 < 2 ? 2

for (let i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i]
  }
}
console.log(smallest)

/*

*/
let arrayRepeating = [3, 4, 5, 3, 6, 8, 6, 5]

// for loop index 0 = arrayRepeating.length
// if

/*

i = 0, j = 4
i = 1, 
i = 2,
*/

for (let i = 0; i < arrayRepeating.length; i++) {
  // let flag = false

  for (let j = i + 1; j < arrayRepeating.length; j++) {
    if (arrayRepeating[i] === arrayRepeating[j]) {
      console.log('Reapting element is ' + arrayRepeating[i])
      // flag = true
      break
    }
  }

  // if (flag) {
  //   break
  // }
}

console.log(arrayRepeating)

// Take average of all numbers in the array
// and then check if it's a whole number or not.

// 262

/*

Create a function that takes two numbers as arguments (num, length) 
and returns an array of multiples of num until the array length reaches 
length.

function (number, length)
function (2, 8)

[2, 4, 6, 8, 10, 12, 14, 16]

function (5, 6)
[5, 10, 15, 20, 25, 30]

*/

//function arraymultiple(5, 6)
function arraymultiple(num, lenght) {
  let totalArray = []

  for (let i = 1; i <= lenght; i++) {
    /*
      i = 1; i*num => 5
      i = 2; i*num =>10
      i = 3; i*num =>15
       ......
      i = 6; i*num =>30
    */
    totalArray.push(i * num)
  }

  return totalArray
}

let arr = arraymultiple(5, 6)
console.log(arr)

// even index will have even number
// odd index will have odd number

// violates at any point, it's not a special array

let specialArray = [8, 3, 8, 13, 10]

function something(specialArray) {
  for (let i = 0; i < specialArray.length; i++) {
    if (i % 2 == 0 && specialArray[i] % 2 !== 0) {
      return false
    } else if (i % 2 !== 0 && specialArray[i] % 2 === 0) {
      return false
    }
  }
  return true
}

let result = something(specialArray)
console.log('Array is Special: ', result)

/*

[3, 2, 1, 2, 8, 9, 6, 9, 7, 9]


V-shaped Boomrang = [first, middle, last]
[first === last],  middle =  different

*/

let arrr = [3, 2, 1, 2, 8, 9, 6, 9, 7, 9]

const boomrangCount = function(array) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 2] && array[i + 1] !== array[i]) {
      console.log('BoomRang: ', array[i], array[i + 1], array[i + 2])
      count++
    }
  }

  return count
}

let count = boomrangCount(arrr)
console.log('Count: ', count)
