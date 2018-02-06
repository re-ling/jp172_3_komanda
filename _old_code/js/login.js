//Checking users and data. Logged in if true, not logged in if false:

function login() {
	var user = document.getElementById("loginname").value;
	var pasw = document.getElementById("loginpsw").value;

	var allusers = [];
	var JSON_users = window.localStorage.userstore;

	if (!JSON_users) {
		return false;
	}

	allusers = JSON.parse(JSON_users);

	for (var i = 0; i < allusers.length; i++) {
		if (allusers[i].name.toLowerCase() == user.toLowerCase() && allusers[i].password == pasw) {
			startloggedsession(allusers[i]);
			//alert("Login successful"); // nukreipi i html pradini, priloginta ir pakeiti virsu
			return true;
		}
	}
	alert("Your username or password is incorrect. Try again.");
	return false;
}

//starts logged in session and stores data of logged user. Redirects to index:

function startloggedsession(currentuser) {
	sessionStorage.setItem("logged", true);
	sessionStorage.setItem("username", currentuser.name);
	sessionStorage.setItem("email", currentuser.email);
	//window.location.replace("index.html");
    index();
}

//log outs the user:

function logout() {
	sessionStorage.clear();
	//window.location.replace("index.html");
    index();
}

//replaces "login" to user data and adds "logout button":

function index() {
	var logged = sessionStorage.getItem("logged");
	if (logged === "true") {
		document.getElementById("login").setAttribute("style", "display:none;");
		document.getElementById("username").innerHTML = "Hi, " + sessionStorage.getItem("username") + "!";
		document.getElementById("username").setAttribute("style", "display: table-cell;");
		document.getElementById("logout").setAttribute("style", "visibility: visible");
        document.getElementById("settings").setAttribute("style", "display: inline");
	} else {
		document.getElementById("username").setAttribute("style", "display: none;");
		document.getElementById("logout").setAttribute("style", "visibility: hidden");
		document.getElementById("login").setAttribute("style", "display:table;");
        document.getElementById("settings").setAttribute("style", "display: none");
	}
}
//Checks if new user and signs up if new user. Validates entered data:

function sign() {

	var pasw = document.getElementById("psw").value;
	var repeat = document.getElementById("rpsw").value;

	var user = document.getElementById("uname").value;
	var emailadd = document.getElementById("address").value;

	if (pasw === "" || pasw === null || repeat === "" || repeat === null || user === "" || user === null || emailadd === "" || emailadd === null) {
		alert("All fields must be filled.");
	} else if (pasw !== repeat) {
		alert("Your password and confirmation password do not match.");
	} else if ((emailadd.includes("@") !== true) || (emailadd.includes(".") !== true)) {
		alert("Invalid email address.");
	} else {
		var userobject = {
			name: user,
			password: pasw,
			email: emailadd,
		};
		if (checkuser(userobject) === true) {
			alert("User with this username or email address already exists.");
		} else {
			savetostorage(userobject);
			alert("Thank you! You can login now and choose the book!");
            return true;
		}
	}
    return false;
}

//saves user data to JSON array and local storage:

function savetostorage(userobject) {
	var allusers = []; //creates empty array, we will use it later for data of all users
	var JSON_users = window.localStorage.userstore; //reads allusers json data from local storage and adds that data to json_users string

	if (JSON_users) { //if there are already registered users, add them to all //users array
		allusers = JSON.parse(JSON_users);
	}
	allusers.push(userobject);
	window.localStorage.userstore = JSON.stringify(allusers);
}

//checks if user exists:

function checkuser(userobject) {

	var allusers = [];
	var JSON_users = window.localStorage.userstore;

	if (!JSON_users) {
		return false;
	}

	allusers = JSON.parse(JSON_users);

	for (var i = 0; i < allusers.length; i++) {
		if (allusers[i].name === userobject.name || allusers[i].email === userobject.emailadd) {
			return true; // This user already exists.
		}
	}
	return false;
}


//Required for password change:
function checkPassword(username, password) {
	var allusers = [];
	var JSON_users = window.localStorage.userstore;

//	if (!JSON_users) {
//		return false;
//	}

	allusers = JSON.parse(JSON_users);

	for (var i = 0; i < allusers.length; i++) {
		if (allusers[i].name === username && allusers[i].password === password) {
			return true; // password correct
		}
	}
	return false;
}

function changePassword() {
    var old = document.getElementById("opp").value;
	var neww = document.getElementById("oppchanged").value;
	var newrepeat = document.getElementById("oppchangedrepeated").value;
	var name = sessionStorage.getItem("username");
	
	if (!checkPassword(name, old)) {
		alert("Old password is incorrect!");
		return false;
	}
	
	if (neww === "" || neww === null || newrepeat === "" || newrepeat === null) {
		alert("Fields cannot be blank!");
		return false;
	}
	
	if (neww !== newrepeat) {
		alert("Your password and confirmation password do not match. Try again.");
		return false;
	}
	
	var allusers;
	var JSON_users = window.localStorage.userstore;
	allusers = JSON.parse(JSON_users);
	for (var i = 0; i < allusers.length; i++) {
		if (allusers[i].name === name) {
			allusers[i].password = neww;
			break;
		}
	}
	
	window.localStorage.userstore = JSON.stringify(allusers);
	alert("Password has been changed!");
	return true;
}
