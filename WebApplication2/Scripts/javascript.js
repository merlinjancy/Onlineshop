const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const PhoneNumberEl = document.querySelector('#PhoneNumber');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

function usernamecheck()
{
    var username = document.getElementById("username").value;
    if (!isRequired(username)) 
    {
        document.getElementById("nameerror").innerHTML="Username is required";
        document.getElementById("username").style.border="2px solid red";
        return false;
    } 
    else if(username.length<3)
    {
        document.getElementById("nameerror").innerHTML='Username must be have more than 2 characters.';
        document.getElementById("username").style.border="2px solid red";
        return false;
    } 
    else 
    {
        document.getElementById("nameerror").innerHTML="*";
        document.getElementById("username").style.border="2px solid #28a745";
        return true;
    }
}

function emailcheck()
{
    var email = document.getElementById("email").value;
    if (!isRequired(email)) 
    {
        document.getElementById("emailerror").innerHTML="Email cannot be blank";
        document.getElementById("email").style.border="2px solid red";
        return false;
    } 
    else if (!isEmailValid(email)) 
    {
        document.getElementById("emailerror").innerHTML="Email is not valid.Numbers were not allowed after the @";
        document.getElementById("email").style.border="2px solid red";
        return false;
    } 
    else 
    {
        document.getElementById("emailerror").innerHTML="*";
        document.getElementById("email").style.border="2px solid #28a745";
        return true;
    }
}

function phonenumbercheck()
{
    var phonenumber = document.getElementById("PhoneNumber").value;
    if (!isRequired(phonenumber)) 
    {
        document.getElementById("phonenumbererror").innerHTML="PhoneNumber cannot be blank";
        document.getElementById("PhoneNumber").style.border="2px solid red";
        return false;
    } 
    else if (phonenumber.length<10) 
    {
        document.getElementById("phonenumbererror").innerHTML="PhoneNumber should contain 10 digits";
        document.getElementById("PhoneNumber").style.border="2px solid red";
        return false;
    } 
    else 
    {
        document.getElementById("phonenumbererror").innerHTML="*";
        document.getElementById("PhoneNumber").style.border="2px solid #28a745";
        return true;
    }
}

function passwordcheck()
{
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirm-password").value;
    if (!isRequired(password) || !isRequired(confirmpassword)) 
    {
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("passworderror").innerHTML="Password cannot be blank";
        document.getElementById("confirm-password").style.border="2px solid red";
        document.getElementById("confirmpassword").innerHTML="Please enter the password again";
        return false;
    } 
    else if (!isPasswordSecure(password) || (password !== confirmpassword)) 
    {
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("passworderror").innerHTML="Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
        document.getElementById("confirm-password").style.border="2px solid red";
        document.getElementById("confirmpassword").innerHTML="The password does not match";
        return false;
    } 
    else 
    {
        document.getElementById("password").style.border="2px solid #28a745";
        document.getElementById("passworderror").innerHTML="*";
        document.getElementById("confirm-password").style.border="2px solid #28a745";
        document.getElementById("confirmpassword").innerHTML="*";
        return true;
    }
}

function enablebtn()
{
    if(usernamecheck()==true && emailcheck()==true && phonenumbercheck()==true && passwordcheck()==true)
    {
        document.getElementById("btn").disabled=false;
    }
    else
    {
        document.getElementById("btn").disabled=true;
    }
}

const isEmailValid = (email) => {
    const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z\-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


