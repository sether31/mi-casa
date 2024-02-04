
// show/hide password
const check = document.getElementById('check');
const password = document.getElementById('pass');

check.addEventListener('click', function(){
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
})

// validation

function validateForm(){
    let uname = document.loginform.uname.value;
    let pass = document.loginform.pass.value;
    
    let name = "pretty_yana";
    let passs = "princessyana31"


    if(uname == name && pass == passs){
        alert('Log in Succesfully');
        window.open("http://127.0.0.1:5500/home.html");
    } else{
        alert ("Login was unsuccessful, please check your username and password");
        uname.value = "";
        pass.value = "";
        return true
    }
}




