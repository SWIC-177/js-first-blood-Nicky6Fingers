const person = {
    name: "Nick",
    age: 31,
  };
  
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) console.log( `Welcome, ${personName}!`);
  else{

    console.log( `You are not old enough to enter, ${personName}.`);
      }
  }
  
  const adultMessage = verifyAdulthood(person.name, person.age);
  
  console.log(adultMessage);