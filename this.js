"use strict"
let person = {
    firstName:"Anil",
    lastName:"Maharana",
    fullName: () =>{
      return this.firstName + " " + this.lastName
    }
}


console.log(person.fullName())