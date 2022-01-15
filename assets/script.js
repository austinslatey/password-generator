// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//set up the array to append data to character requirements
var dataSet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHITJLMNOPQRSTUVWXYZ", "1234567890", ' !@#$%^&*(){}|><'];
// seeting up for user input for character requirements
var characterSet = "";

// display password to password input element
function writePassword() {
    var password = definePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//defines the password and starts to define it helper functions
function definePassword() {
    //for password length
    var passwordLength = generatePasswordLength();
    // getting conformation from user what character types they would like
    var confirmAtLeastone = getCharacterRequirement();

    var password = createPassword(confirmAtLeastone, passwordLength);

    return password;

}

var generatePasswordLength = function () {
    // ask user to enter password length
    var passwordLengthNum = window.prompt("Please enter password length between 8 & 128.");
    // check to see if password length meets critera
    var passwordLengthNum = parseInt(passwordLengthNum);
   
    if (passwordLengthNum <= 8 && passwordLengthNum >= 128) {
        window.prompt("Invalid input!");
        return generatePasswordLength();

    } else {
        return passwordLengthNum;
    }
}


// if password length meets criteria ask user if they would like to include  include lowercase, uppercase, numeric, and/or special characters
function getCharacterRequirement() {

    // check to see if there is at least 1 certain type of character selcted 
    var confirmAtLeastone = [];

    confirmAtLeastone.push(confirm("Would you like to use lowercase?"));
    confirmAtLeastone.push(confirm("Would you like to use Uppercase?"));
    confirmAtLeastone.push(confirm("Would you like to use numeric vaules?"));
    confirmAtLeastone.push(confirm("Would you like to use Special Characters?"));




    // if user doesnt select 1 certain character select, inform user that input is invalid, enter character select again

     if (confirmAtLeastone.includes(true)) {
        // sucessful return of the value of what the user decides to choose. 
        return confirmAtLeastone;
        

    } else {
        alert("Select one character, at the very least.");
        console.log("someError");
        confirmAtLeastone = getCharacterRequirement();
    }
}


function generateCharSet(passwordEl) {

    // run a for loop for as many characters the user would like to create
    for (let i = 0; i < passwordEl.length; i++) {
        if (passwordEl[i]) {
            characterSet = characterSet + dataSet[i];
        }
    }
    return characterSet;
}

// selects a character set at random from data set
var generateCharSetAtRandom = function (characterSet) {
    var atRandom = Math.floor(Math.random() * characterSet.length);
    return characterSet[atRandom];
}


function createPassword(passwordEl, passwordLength) {
    var characterSet = generateCharSet(passwordEl);
    var password = "";


    for (var i = 0; i < passwordLength; i++) {
        password = password + generateCharSetAtRandom(characterSet);
    }

    return password;

}

// Add event listener to generate button to fire write password
generateBtn.addEventListener("click", writePassword);