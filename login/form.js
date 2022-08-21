let email = document.getElementById("exampleDropdownFormEmail1");

function validate(){
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
}
function validemail(){
    let form = document.getElementById("form");
    let email = document.getElementById('exampleDropdownFormEmail1').value;
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