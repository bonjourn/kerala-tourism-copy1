let email = document.getElementById("inputEmail4");
let num = document.getElementById("inputPhone4");
let pwd = document.getElementById("inputPassword4");
let cpwd = document.getElementById("inputcnfrmPassword4");

function validate(){
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(num.value.trim()==""){
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
function validemail(){
    let form = document.getElementById("form");
    let email = document.getElementById('inputEmail4').value;
    let text =document.getElementById("text");
    let regexp = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;

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
}
function validnum(){
    let form = document.getElementById("form");
    let number=document.getElementById('inputPhone4').value;
    let text2 =document.getElementById("text2");
    let numbers= /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if (number.match(numbers)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text2.innerHTML="Your Number is valid";
        text2.style.color="#00ff00"; 
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text2.innerHTML="Enter valid Number";
        text2.style.color="#ff0000";
    }
}
function pwdstrength() {
    var pwdstr = document.getElementById('pwdstr');
    var strong = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var medium = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var weak = new RegExp("(?=.{8,}).*", "g");
    let pwd = document.getElementById("inputPassword4");
    if (pwd.value.length == 0) {
        pwdstr.innerHTML = 'Type Password';
    }
     else if (false == weak.test(pwd.value)) {
        pwd.style.border="2px solid green"
        pwdstr.innerHTML = 'More Characters';
        pwdstr.style="color:red"
    }
     else if (strong.test(pwd.value)) {
        pwdstr.innerHTML = '<span style="color:green">Strong!</span>';
        pwdstr.style="color:green"
    }
     else if (medium.test(pwd.value)) {
        pwd.style.border="2px solid orange";
        pwdstr.innerHTML = '<span style="color:orange">Medium!</span>';
        pwdstr.style="color:orange"
    }
     else {
        pwd.style.border="2px solid red";
        pwdstr.innerHTML = '<span style="color:red">Poor!</span>';
        pwdstr.style="color:red"
    }       
}        