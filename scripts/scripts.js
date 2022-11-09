window.addEventListener("load", initEvents);

let pattern = /[a-z|0-9]\w+[@]\w+[.]\w+/;

function initEvents() {
    let textBox = document.querySelector(".box");
    textBox.addEventListener("blur", validateName);
    
    let textBox2 = document.querySelector(".box-2");
    textBox2.addEventListener("change", validateUserame);
    textBox2.addEventListener("blur", validateUserame);

    let textBox3 = document.querySelector(".box-email");
    textBox3.addEventListener("change", validateEmail);
    textBox3.addEventListener("blur", validateEmail);

    // Enter Password
    let passwordBox = document.querySelector(".box-3");
    passwordBox.addEventListener("keyup", checkPassword); // For live-checking (ignores autofill)
    passwordBox.addEventListener("change", checkPassword); // For checking after autofill
    passwordBox.addEventListener("blur", checkPassword); // For checking after blur
    // For inserting the visibility eye icon for the first time
    passwordBox.addEventListener("click", insertVisibilityIcon, {once : true});

    let checkBoxPasswordVisibility = document.querySelector(".box-3-visiblity");
    checkBoxPasswordVisibility.addEventListener("click", changeVisibility);
    checkBoxPasswordVisibility.addEventListener("click", changePasswordVisibilityIcon);
    

    // Confirm password
    let confirmPasswordBox = document.querySelector(".box-4");
    confirmPasswordBox.addEventListener("click", checkPasswordEntered);
    confirmPasswordBox.addEventListener("keyup", checkPasswordEntered);
    confirmPasswordBox.addEventListener("blur", checkPasswordEntered);
    // For inserting the visibility eye icon for the first time
    confirmPasswordBox.addEventListener("click", insertVisibilityIconConfirm, {once : true});

    let checkBoxConfirmPasswordVisibility = document.querySelector(".box-4-visiblity");
    checkBoxConfirmPasswordVisibility.addEventListener("click", changeVisibilityConfirm);
    checkBoxConfirmPasswordVisibility.addEventListener("click", changePasswordVisibilityIconConfirm);

    // From submit button
    let formSubmitButton = document.querySelector(".form-submit");
    formSubmitButton.addEventListener("click", checkForm);
}

function validateName() {
    let name = this.value;
    let spanBox1 = document.querySelector(".err-name");
    if(name == "") {
        this.style.border = "2px solid red";
        spanBox1.innerHTML = "Please enter your name";
    }
    else {
        this.style.border = "2px solid green";
        spanBox1.innerHTML = "";
    }
}

function validateUserame() {
    let username = this.value;
    let spanBox2 = document.querySelector(".err-username");
    if(username == "") {
        this.style.border = "2px solid red";
        spanBox2.innerHTML = "Please enter your Username";
    }
    else {
        this.style.border = "2px solid green";
        spanBox2.innerHTML = "";
    }
}

function validateEmail() {
    let emailInput = this.value;
    let spanBox3 = document.querySelector(".err-email");

    if(emailInput == "") {
        this.style.border = "2px solid red";
        spanBox3.innerHTML = "Please enter an Email-ID";
    }
    else if(!pattern.test(emailInput)) {
        this.style.border = "2px solid red";
        spanBox3.innerHTML = "Please enter a valid Email-ID";
    }
    else {
        this.style.border = "2px solid green";
        spanBox3.innerHTML = "";
        console.log("Email Valid!");
    }
}

function checkPassword() {
    let pwd = this.value;
    let span = document.querySelector(".err-password");
    if(pwd.length === 0) {
        this.style.border = "2px solid red";
        span.innerHTML = "Please enter the password.";
    }
    else if(pwd.length > 0 && pwd.length < 5) {
        this.style.border = "2px solid orange";
        span.innerHTML = "Weak Password";
    }
    else if(pwd.length >= 5 && pwd.length < 8) {
        this.style.border = "2px solid yellow";
        span.innerHTML = "Average Password";
    }
    else {
        this.style.border = "2px solid green";
        span.innerHTML = "Strong Password";
    }
}

function changeVisibility() {
    var checkBox = document.querySelector(".box-3-visiblity");
    var password = document.querySelector(".box-3");
    if(checkBox.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

function insertVisibilityIcon() {
    var passwordVisibilityIcon = document.querySelector(".box-3-visiblity-icon");
    passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye"></i>';
}

function changePasswordVisibilityIcon() {
    var checkBox = document.querySelector(".box-3-visiblity");
    var passwordVisibilityIcon = document.querySelector(".box-3-visiblity-icon");
    
    if(checkBox.checked) {
        passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
    else {
        passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
}

function changeVisibilityConfirm() {
    var checkBox = document.querySelector(".box-4-visiblity");
    var password = document.querySelector(".box-4");
    if(checkBox.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

function insertVisibilityIconConfirm() {
    var passwordVisibilityIcon = document.querySelector(".box-4-visiblity-icon");
    passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye"></i>';
}

function changePasswordVisibilityIconConfirm() {
    var checkBox = document.querySelector(".box-4-visiblity");
    var passwordVisibilityIcon = document.querySelector(".box-4-visiblity-icon");
    
    if(checkBox.checked) {
        passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
    else {
        passwordVisibilityIcon.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
}

function checkPasswordEntered() {
    var password = document.querySelector(".box-3").value;
    var span = document.querySelector(".err-confirm-password");
    if(password.length === 0) {
        this.style.border = "2px solid red";
        span.innerHTML = "Please enter the password above.";
        console.log("pwd enter");
    }
    else {
        comparePassword();
    }
}

function comparePassword() {
    var password = document.querySelector(".box-3").value;
    var passwordConfirm = document.querySelector(".box-4").value;
    var span = document.querySelector(".err-confirm-password");

    if(password === passwordConfirm) {
        document.querySelector(".box-4").style.border = "2px solid green";
        span.style.color = "green";
        span.innerHTML = "Passwords match!";
    }
    else {
        document.querySelector(".box-4").style.border = "2px solid red";
        span.innerHTML = "Passwords do not match!";
    }
}

function checkForm() {
    var name = document.querySelector(".box");
    var username = document.querySelector(".box-2");
    var emailInput = document.querySelector(".box-email");
    var password = document.querySelector(".box-3");
    var passwordConfirm = document.querySelector(".box-4");
    var form = document.querySelector("#form");
    var submitMsg = document.querySelector(".submit-msg");

    if(!(name.value==="") && !(username.value==="") && !(emailInput.value==="") && !(password.value==="") && 
    !(passwordConfirm.value==="") && pattern.test(emailInput.value) && password.value === passwordConfirm.value) {
        console.log("SUCCESS!");
        form.style.boxShadow = "0px 0px 4px 1px green";
        
        submitMsg.innerHTML = '<span class="form-submit-msg">SUCCESS !</span>';
        submitMsg.style.color = 'green';

        document.querySelector(".err-name").innerHTML = "";
        document.querySelector(".err-username").innerHTML = "";
        document.querySelector(".err-email").innerHTML = "";
        document.querySelector(".err-password").innerHTML = "";
        document.querySelector(".err-confirm-password").innerHTML = "";
    }
    if((name.value==="") && (username.value==="") && (emailInput.value==="") && (password.value==="") && 
    (passwordConfirm.value==="")){
        form.style.boxShadow = "0px 0px 0px 3px red";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(name.value === "") {
        name.style.border = "2px solid red";
        document.querySelector(".err-name").innerHTML = "Required!";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(username.value === "") {
        username.style.border = "2px solid red";
        document.querySelector(".err-username").innerHTML = "Required!";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(emailInput.value === "") {
        emailInput.style.border = "2px solid red";
        document.querySelector(".err-email").innerHTML = "Required!";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(password.value === "") {
        password.style.border = "2px solid red";
        document.querySelector(".err-password").innerHTML = "Required!";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(passwordConfirm.value === "") {
        passwordConfirm.style.border = "2px solid red";
        document.querySelector(".err-confirm-password").innerHTML = "Required!";
        submitMsg.innerHTML = '<span class="form-submit-msg">FORM INCOMPLETE !</span>';
        submitMsg.style.color = 'red';
    }
    if(!(emailInput.value === "") && !pattern.test(emailInput.value)) {
        emailInput.style.border = "2px solid red";
        submitMsg.innerHTML = '<span class="form-submit-msg">ERROR !</span>';
        submitMsg.style.color = 'red';
        document.querySelector(".err-email").innerHTML = "Please enter a valid Email-ID";
    }
    if(!(password.value === "") && !(passwordConfirm.value === "") && !(password.value === passwordConfirm.value)) {
        password.style.border = "2px solid red";
        passwordConfirm.style.border = "2px solid red";
        submitMsg.innerHTML = '<span class="form-submit-msg">ERROR !</span>';
        submitMsg.style.color = 'red';
        document.querySelector(".err-password").innerHTML = "Passwords do not match!";
        document.querySelector(".err-confirm-password").innerHTML = "Passwords do not match!";
    }
}