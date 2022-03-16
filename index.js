let button = document.querySelector(".buttonClaim");
let inputFname = document.querySelector('[name="fname"]');
let inputLname = document.querySelector('[name="lname"]');
let inputEmail = document.querySelector('[name="email"]');
let inputPass = document.querySelector('[name="password"]');

button.addEventListener("click", validateForm);

function validateForm() {
    if (inputFname.value == ""){  
        console.log('kur vardas');
        inputFname.style.border = "2px solid red";
    }
    if (inputLname.value == ""){  
        console.log('kur pavarde');
    }
    if (inputEmail.value == ""){  
        console.log('kur emailas');
    }
    if (inputPass.value == ""){  
        console.log('kur passwordas');
    }
}

