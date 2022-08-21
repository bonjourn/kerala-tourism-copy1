let email = document.getElementById("inputEmail4");
let umber = document.getElementById("inputPhone4");

function validate(){
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(umber.value.trim()==""){
        alert("please Enter number");
        return false;
    }
    else if(pwd.value.trim()==""){
        alert("please provide password");
        return false;
    }
    else if(pwd.value.length<=8){
        alert("password should contain 8 character");
        return false;
    }
    else if(pwd.value!=cpwd.value){
        alert("password does not match");
        return false;
    }
}
function valid(){
    let form = document.getElementById("form");
    let email = document.getElementById('inputEmail4').value;
    let number=document.getElementById('inputPhone4').value;
    let text =document.getElementById("text");
    let regexp = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;
    let numbers= /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if(email.match(regexp))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email Adddress is valid";
        text.style.color="#00ff00";
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML="Enter valid email address";
        text.style.color="#ff0000";
    }
    if (number.match(numbers)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        textn.innerHTML="Your Number is valid";
        textn.style.color="#00ff00"; 
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        textn.innerHTML="Enter valid Number";
        textn.style.color="#ff0000";
    }

    }