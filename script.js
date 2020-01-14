window.addEventListener('load', function() {

    // Prompt Questions for user to input values
    var inputLength = prompt("Please enter a number for length(must between 8-128 characters)");
    
    // Validate user input 
    while (inputLength < 8 || inputLength > 128) {
        inputLength = prompt("Length must be between 8-128 characters");
    }
    
    // Setting Variables
    var specialChar = confirm("Do you want to include Special Characters?");
    var numericalChar = confirm("Do you want to include Numerical values?");
    var lowerChar = confirm("Do you want to include Lowercase letters?");
    var upperChar = confirm("Do you want to include Uppercase letters?");

    // Adding conditional statements
    if (specialChar === true) {
        alert ("You've selected to use Special Characters: " + specialChar);
    }
    else {
        alert("You've selected NOT to use Special Characters: " + specialChar);
    }
    
    if (numericalChar === true) {
        alert ("You've selected to use Numerical Values: " + numericalChar);
    }
    else {
        alert("You've selected NOT to use Numerical Values: " + numericalChar);
    }
    
    if (lowerChar === true) {
        alert ("You've selected to use Lowercase letters: " + lowerChar);
    }
    else {
        alert("You've selected NOT to use Lowercase letters: " + lowerChar);
    }
    if (upperChar === true) {
        alert ("You've selected to use Uppercase letters: " + upperChar);
    }
    else {
        alert("You've selected NOT to use Uppercase letters: " + upperChar);
    }

    //DOM elements and appending it 
    var result = document.getElementById('password');
  
    document.getElementById('generate').addEventListener('click', () => {
      result.value = generatePassword(specialChar, numericalChar, lowerChar, upperChar, inputLength);
    });
  
    document.getElementById('clipboard').addEventListener('click', () => {
      var textarea = document.createElement('textarea');
      var password = result.value;
  
      if (!password) {
        return;
      }
  
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      alert('Password copied to clipboard');
    });
  });
  
  //Generate randomFunctions
  var randomFunc = {
    special: getRandomSpecial,
    numerical: getRandomNumber,
    lower: getRandomLower,
    upper: getRandomUpper
  };
  
  // Call for a function for when generate password is selected
  function generatePassword(lower, upper, special, numerical, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + special + numerical;
    const typesArr = [{special}, {numerical}, {lower}, {upper}].filter(item => Object.values(item)[0]);
  
    // create a loop
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
  
    var finalPassword = generatedPassword.slice(0, length);
  
    return finalPassword;
  }
  
  // added rando for random functions
  function getRandomLower() {
    return rando("qwertyuiopasdfghjklzxcvbnm")
  }
  
  function getRandomUpper() {
    return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
  }
  
  function getRandomNumber() {
    return rando(9);
  }
  
  function getRandomSpecial() {
    return rando("!@#$%^&*(){}[]=<>/,.;");
  }