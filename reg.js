let hidepass = document.getElementById("hide-pass");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
hidepass.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        hidepass.src="https://cdn-icons-png.freepik.com/256/14035/14035324.png?ga=GA1.1.617146296.1709204938&";
    }else{
        password.type = "password";
        hidepass.src="https://cdn-icons-png.freepik.com/256/14035/14035312.png?ga=GA1.1.617146296.1709204938&";
    }
}