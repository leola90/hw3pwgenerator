// Prompt Questions for user to input values
var userInputLength = confirm("Please use the slider to select the length");
var specialChar = confirm("Do you want to include Special Characters?");
var numericalChar = confirm("Do you want to include Numerical values?");
var lowerChar = confirm("Do you want to include Lowercase letters?");
var upperChar = confirm("Do you want to include Uppercase letters?");
var userInput = 0;

// Conditional statements
if (specialChar === true) {
    userInput++;
    alert ("You've selected to use Special Characters: " + specialChar);
}
else {
    alert("You've selected NOT to use Special Characters: " + specialChar);
}

if (numericalChar === true) {
    userInput++;
    alert ("You've selected to use Numerical Values: " + numericalChar);
}
else {
    alert("You've selected NOT to use Numerical Values: " + numericalChar);
}

if (lowerChar === true) {
    userInput++
    alert ("You've selected to use Lowercase letters: " + lowerChar);
}
else {
    alert("You've selected NOT to use Lowercase letters: " + lowerChar);
}
if (upperChar === true) {
    userInput++;
    alert ("You've selected to use Uppercase letters: " + upperChar);
}
else {
    alert("You've selected NOT to use Uppercase letters: " + upperChar);
}


function generate(){
    let complexity = document.getElementById("slider").value;
    let values = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let password = "";
    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("slider").oninput = function(){
        if(document.getElementById("slider").value >0){
            document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;      
        }
        else {
            document.getElementById("length").innerHTML = "Length: 1";
        }
    }

}

function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}

document.getElementById("length").innerHTML = "Length: 25";

