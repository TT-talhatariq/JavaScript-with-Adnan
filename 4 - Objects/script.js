'use strict'

// let name  = "Talha"
// let age = 22
// let isStudent = true
// let friends = ["ABC", "BCD"]

/// user-defined data types | Objects
let talha = {
  name: 'Talha',
  age: 22,
  isStudent: true,
  friends: ['Ali', 'Talha'],

  introduction: function() {
    return `${this.name} have age of ${this.age}`
  },
}

console.log(talha.name)

// let array = {
//   start:"160",
//   end :"163",

//   push:function(){

//     end + (1) ==> 164
//   },
//   pop:function{

//   },
//   access: function(index){
//     return start + index;
//     // start + 2
//   }
// }

let employeeID = [54, 23, 12, 5, 50]
employeeID.push(50)

let employee = {
  firstName: 'Talha',
  lastName: 'Tariq',
  employeeID: '81278127',
  hireDate: '22 July 2021',
  salary: 5000,

  introduction: function(adrress) {
    let introduction = `${this.firstName} ${this.lastName} is working in this comapny since ${this.hireDate} and he have salary of ${this.salary} dollars.`

    console.log(introduction)
  },
}

// Employee | data types + methods

employee.introduction('Pakistan')
