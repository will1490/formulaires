/*
*Add a keyup listener on the first input field, so that once you type a letter in this field, 
*it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
*/

export function configForm() {
    // On récupère l'élément input avec l'id "firstname"
    const inputFirstname = document.getElementById("firstname");
  
    // On récupère l'élément span avec l'id "display-firstname"
    const displayFirstname = document.getElementById("display-firstname");
  
    // Ajout d'un listener qui détecte les événements de type "keyup"
    // (=> Chaque fois que l'utilisateur relâche une touche après avoir tapé quelque chose)
    inputFirstname.addEventListener("keyup", () => {

      // Update du contenu de l'élément span avec la value de l'input
      displayFirstname.textContent = inputFirstname.value;
    });
}


/*
* Add a keyup listener on the second input (the number input),
* so that if the age is below 18 the content of the section a-hard-truth remains hidden, 
* otherwise show them this hard to swallow fact.
*/

export function configAge() {

    const inputAge = document.getElementById("age");
    const  aHardTruth = document.getElementById("a-hard-truth");
    
    inputAge.addEventListener("keyup", () => {
        const age = parseInt(inputAge.value);
        if (age < 18) {
          aHardTruth.style.visibility = "hidden";
        } else {
          aHardTruth.style.visibility = "visible";
        }
    });
}

/*
*  Add a keyup listener on both fields and show a visual hint (for instance turn the input border red) ,
*  add a validation, if the password is too short (less than 6 characters) 
*  or if the password and its confirmation do not match.


export function configPwd() {
    const inputPwd = document.getElementById("pwd");
    const confirmPwd = document.getElementById("pwd-confirm");
  
    function validatePassword() {
      const pwd = inputPwd.value;
      const pwdConfirm = confirmPwd.value;
  
      if (pwd.length < 6) {
        inputPwd.style.border = "2px solid red";
      } else {
        inputPwd.style.border = "none";
      }
  
      if (pwd !== pwdConfirm) {
        confirmPwd.style.border = "2px solid red";
      } else {
        confirmPwd.style.border = "none";
      }
    }
  
    inputPwd.addEventListener("keyup", validatePassword);
    confirmPwd.addEventListener("keyup", validatePassword);
  }*/

  /*BONUS:Add error messages if the input values doesnt 
*pass the validation 
*/
export function configPwd() {
    const inputPwd = document.getElementById("pwd");
    const confirmPwd = document.getElementById("pwd-confirm");
    const errorPwd = document.getElementById("error-pwd");
    
    function validatePassword() {
      const pwd = inputPwd.value;
      const pwdConfirm = confirmPwd.value;
  
      if (pwd.length < 6) {
        inputPwd.classList.add("error");
        errorPwd.textContent = "Password must be at least 6 characters long";
      } else {
        inputPwd.classList.remove("error");
        errorPwd.textContent = "";
      }
  
      if (pwd !== pwdConfirm) {
        confirmPwd.classList.add("error");
        errorPwd.textContent = "Passwords do not match";
      } else {
        confirmPwd.classList.remove("error");
        if (!errorPwd.textContent) {
          errorPwd.textContent = "Password ok ! ";
        }
      }
    }
  
    inputPwd.addEventListener("keyup", validatePassword);
    confirmPwd.addEventListener("keyup", validatePassword);
  }


  /*
  * Finally, use a change listener on the <select> field to toggle a dark mode on the whole page.
  * For ease of use, we'll say that the dark mode is just turning the background black and the text white.
  *  Use the dark mode 
  */

  export function configDarkMode() {
    const selectElement = document.querySelector('select');
    const bodyElement = document.querySelector('body');
  
    selectElement.addEventListener('change', function() {
      if (selectElement.value === 'dark') {
        bodyElement.classList.add('dark-mode');
      } else {
        bodyElement.classList.remove('dark-mode');
      }
    });
  }

  /*
  * Do the dark-mode using js to change css variables
  */
/*
* First, create a function called toggleDarkMode that toggles the dark mode on and off.
* Use the classList property to add or remove a class of 'dark-mode' on the body element.
*/
function toggleDarkMode() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-mode');
  }
  
  /*
  * Next, add an event listener to the 'Dark mode' button that calls the toggleDarkMode function when clicked.
  */
  
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', toggleDarkMode);
  
  /*
  * Finally, use a change listener on the <select> field to toggle a dark mode on the whole page.
  * For ease of use, we'll say that the dark mode is just turning the background black and the text white.
  */
  
const selectElement = document.querySelector('select');
const bodyElement = document.querySelector('body');
  
selectElement.addEventListener('change', function() {
    if (selectElement.value === 'dark') {
      bodyElement.classList.add('dark-mode');
    } else {
      bodyElement.classList.remove('dark-mode');
    }
  });
  

  
function init() {
    configForm();
    configAge();
    configPwd();
    configDarkMode();
  }
  
init();


