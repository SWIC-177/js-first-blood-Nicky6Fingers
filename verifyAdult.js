const person = {
    name: "Nick",
    age: 33,
  };
  
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) {
      return `Welcome, ${personName}!`;
    } else {
      return `You are not old enough to enter, ${personName}.`;
    }
  }
  
  const adultMessage = verifyAdulthood(person.name, person.age);
  
  console.log(adultMessage);