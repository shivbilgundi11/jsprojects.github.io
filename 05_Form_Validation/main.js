//Selecting all elements...

//First Name...
let firstNameInput = document.getElementById('fname');
let firstNameError = document.getElementById('first-name-error');
let emptyFirstNameError = document.getElementById('empty-first-name');

//Last Name...
let lastNameInput = document.getElementById('lname');
let lastNameError = document.getElementById('last-name-error');
let emptyLastNameError = document.getElementById('empty-last-name');

//Email...
let emailInput = document.getElementById('email');
let emailError = document.getElementById('email-error');
let emptyEmailError = document.getElementById('empty-email');

//Phone...
let phoneInput = document.getElementById('phone');
let phoneError = document.getElementById('phone-error');
let emptyPhoneError = document.getElementById('empty-phone');

//Password...
let passwordInput = document.getElementById('password');
let passwordError = document.getElementById('password-error');
let emptyPasswordError = document.getElementById('empty-password');

//Confirm Password...
let confirmPasswordInput = document.getElementById('confirm-password');
let confirmPasswordError = document.getElementById('confirm-password-error');
let emptyconfirmPasswordError = document.getElementById('empty-confirm-password');

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");









//Functions to verify the data according to input recieved...
//TextVerify...
const textVerify = (text) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(text);
};

//Email Verify...
const emailVerify = (email) => {
    const regex = /^[a-zA-Z0-9_.]+@[a-z]{3,}\.[a-z\.]{3,}$/;
    return regex.test(email);
};

//Phone Verify...
const phoneVerify = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
};

//Password Verification
const passwordVerify = (password) => {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password) && password.length >= 8;
};







//Now some functions to show error and result based on input...

//For error styling and displaying error...
const errorUpdate = (inputReference, errorReference) => {
    errorReference.classList.remove('hide');
    inputReference.classList.remove('valid');
    inputReference.classList.add('error');
};

//for no errors...
const validInput = (inputReference) => {
    inputReference.classList.add('valid');
    inputReference.classList.remove('error');
};

//for empty inputs...
const emptyInput = (inputReference, emptyErrorReference, otherErrorReference) => {
    if (!inputReference.value) {
        //input is null/empty...
        emptyErrorReference.classList.remove('hide');
        inputReference.classList.add('error');
        inputReference.classList.remove('valid');
    } else {
        emptyErrorReference.classList.add('hide');
    };
};








//now Starts the validation...

//1. First Name...
firstNameInput.addEventListener('input', ()=>{
    if(textVerify(firstNameInput.value)){
        //if input valid...
        firstNameError.classList.add('hide');

        validInput(firstNameInput);
    }else{
        //if input error...
        errorUpdate(firstNameInput, firstNameError);

        //if input is empty...
        emptyInput(firstNameInput, emptyFirstNameError, firstNameError);
    };
});



//2. Last Name...
lastNameInput.addEventListener('input', ()=>{
    if (textVerify(lastNameInput.value)) {
        //if input valid...
        lastNameError.classList.add('hide');

        validInput(lastNameInput);
    }else{
        //if input is not valid...
        errorUpdate(lastNameInput, lastNameError);

        //if input is empty..
        emptyInput(lastNameInput, emptyLastNameError, lastNameError);
    };
});



//3. Email...
emailInput.addEventListener('input', () => {
    if (emailVerify(emailInput.value)) {
        //if input is valid...
        emailError.classList.add('hide');

        validInput(emailInput);
    } else {
        //if input is not valid...
        errorUpdate(emailInput, emailError);

        //if empty email input...
        emptyInput(emailInput, emptyEmailError, emailError);
    }
});



//4. Phone Number...
phoneInput.addEventListener('input', () => {
    if (phoneVerify(phoneInput.value)) {
        //if input is valid...
        phoneError.classList.add('hide');

        validInput(phoneInput);
    } else {
        //if input is not valid...
        errorUpdate(phoneInput, phoneError);

        //if empty email input...
        emptyInput(phoneInput, emptyPhoneError, phoneError);
    }
});



//5. Password...
passwordInput.addEventListener('input', () => {
    if (passwordVerify(passwordInput.value)) {
        //if input is valid...
        passwordError.classList.add('hide');

        validInput(passwordInput);
    } else {
        //if input is not valid...
        errorUpdate(passwordInput, passwordError);

        //if empty email input...
        emptyInput(passwordInput, emptyPasswordError, passwordError);
    };
});



//6. Confirm Password...
confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value === confirmPasswordInput.value) {
        //if input is valid...
        confirmPasswordError.classList.add('hide');

        validInput(confirmPasswordInput);
    } else {
        //if input is not valid...
        errorUpdate(confirmPasswordInput, confirmPasswordError);

        //if empty email input...
        emptyInput(confirmPasswordInput, emptyconfirmPasswordError, confirmPasswordError);
    };
});



//Submit button
submitButton.addEventListener("click", () => {
    if (validClasses.length == 6 && invalidClasses.length == 0) {
      alert("Success");
    } else {
      alert("Error");
    }
});