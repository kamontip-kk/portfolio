window.onload = loginLoad;

const qS = window.location.search
const urlParams = new URLSearchParams(qS)
const username = urlParams.get('username')
const password = urlParams.get('password') 
console.log(username)
console.log(password)

function loginLoad(){
	
	var login = document.getElementById("myLogin")
	login.onsubmit = checkLogin;
}

function checkLogin(){

	let user = document.getElementById("username")
	let pass = document.getElementById("password")

	if(user.value == username && pass.value == password){
		alert("Login Success")
	}
	else if (user.value != username){
		alert("Username is not valid")
		return false;
	}
	else{
		alert("Incorrect password")
		return false;
	}
}

			