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
