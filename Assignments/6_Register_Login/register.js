window.onload = pageLoad;

function pageLoad(){
    document.getElementById("myForm").onsubmit = submitForm;
}

function submitForm() { 
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let repass = document.getElementById("repass").value

    if(password == repass){ 
        alert("Register success!")
        document.getElementById("myForm").action = "login.html"
    }
    else{
        document.getElementById("errormsg").innerHTML = "!Passwords do not match"
        document.getElementById("myForm").action = ""
        return false;
    }
}
const qS = window.location.search
const urlParams = new URLSearchParams(qS)
const username = urlParams.get('username');
const password = urlParams.get('password') 