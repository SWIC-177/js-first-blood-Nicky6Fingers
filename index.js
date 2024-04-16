// Create function 
//function greet(name){
    //return ("Hello, " + (name))
//}

//Call Function
 //var greeting = greet("Nick")

//Display
//console.log(greeting)

const person = {
    name: "Nick",
    age: 31,
  };
  
  function verifyAdulthood(name, personAge) {
    if (personAge >= 18) return `Welcome, ${name}!`;
  
    return `You are not old enough to enter, ${name}.`;
  }
  
  const adultMessage = verifyAdulthood(person.name, person.age);
  
  console.log(adultMessage);