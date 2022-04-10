// 1. Write your functions here

function line(array){
    if(array.length !== 0){
      console.log(`The line is currently: `)
        array.forEach(function(element){
          console.log(`${array.indexOf(element) + 1}. ${element}`)
        })
    } else {
      console.log("The line is currently empty")
    }
  }

  function takeANumber(array, newName){
    array.push(newName)
    console.log(`Welcome, ${newName}. You are number ${array.indexOf(newName) + 1} in line.`)
  }


  function nowServing(array){
    if(array.length !== 0){
        console.log(`Currently serving ${array[0]}`)
        array.shift()
    } else {
        console.log("There is nobody waiting to be served!")}
  }

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"