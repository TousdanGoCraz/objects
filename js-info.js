// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.
let User = Object.create(null)
User['name'] = 'John'
User['surname'] = 'Smith'
User.name = 'Pete'
delete User.name
console.log(User)

//     Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    for (let key in  obj){
        return false
    }    
    return true
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

// We have an object storing salaries of our team:

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sum(obj){
    let total = 0
    for (let salary in obj){
        total += obj[salary]
    }
    return total
}

console.log(sum(salaries))



// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] === 'number') obj[key] *= 2
    }
}

multiplyNumeric(menu);

console.log(menu)
// // after the call
// menu = {
//   width: 400,
//   height: 600,multiplyNumeric(menu);
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.