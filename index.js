let button = document.querySelector(".buttonClaim");
let inputFname = document.querySelector('[name="fname"]');
let inputLname = document.querySelector('[name="lname"]');
let inputEmail = document.querySelector('[name="email"]');
let inputPass = document.querySelector('[name="password"]');
let input = document.querySelector('input');
let fnamep = document.getElementById('fnamep');
let lnamep = document.getElementById('lnamep');
let emailp = document.getElementById('emailp');
let passwordp = document.getElementById('passwordp');

button.addEventListener("click", validateForm);

function validateForm() {
    
    if (inputFname.value == ""){  
        inputFname.classList.add('inputError');
        inputFname.classList.remove('input');
        fnamep.innerHTML = "First Name cannot be empty";
        fnamep.classList.add('pError');
    }
    if (inputLname.value == ""){  
        inputLname.classList.add('inputError');
        inputLname.classList.remove('input');
        lnamep.innerHTML = "Last Name cannot be empty";
        lnamep.classList.add('pError');
    }
    if (inputEmail.value == ""){  
        inputEmail.classList.add('inputError');
        inputEmail.classList.remove('input');
        emailp.innerHTML = "Looks like this is not an email";
        emailp.classList.add('pError');
    }
    if (inputPass.value == ""){  
        inputPass.classList.add('inputError');
        inputPass.classList.remove('input');
        passwordp.innerHTML = "Password cannot be empty";
        passwordp.classList.add('pError');
    }
    if (inputFname.value !== ""){  
        inputFname.classList.remove('inputError');
        inputFname.classList.add('input');
        fnamep.innerHTML = "";
        fnamep.classList.remove('pError');
    }
    if (inputLname.value !== ""){  
        inputLname.classList.remove('inputError');
        inputLname.classList.add('input');
        lnamep.innerHTML = "";
        lnamep.classList.remove('pError');
    }
    if (inputEmail.value !== ""){  
        inputEmail.classList.remove('inputError');
        inputEmail.classList.add('input');
        emailp.innerHTML = "";
        emailp.classList.remove('pError');
    }
    if (inputPass.value !== ""){  
        inputPass.classList.remove('inputError');
        inputPass.classList.add('input');
        passwordp.innerHTML = "";
        passwordp.classList.remove('pError');
    }
}

