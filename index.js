



// Step 1: Select the theme button
const themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const formButton = document.getElementById("rsvp-button");

const nameInput = document.getElementById('name');  
const stateInput = document.getElementById('state'); 
const emailInput = document.getElementById('email'); 
const phoneInput = document.getElementById('phone'); 
const form = document.getElementById("rsvp-form");
const participantsDiv = document.querySelector('.rsvp-participants');
const p = document.createElement("p"); 
const confirmation = document.getElementById("confirmation");
         // add it to the container




const addParticipant = (event,person) => {
    // code to manipulate the DOM here
    

    if (event) event.preventDefault();
                          
    const  message = "🍽️ " + person.name + " from " + person.hometown + " has RSVP'd.";
    p.textContent = message; 
    participantsDiv.appendChild(p);
   
 
}




const validateForm = (event) => {

  
  event.preventDefault();
  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: rsvpInputs[0].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  };

  // Loop through all inputs

  if (person.name.length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  } else {
    rsvpInputs[0].classList.remove("error");
  }

  if (person.hometown.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }

  if (person.email.length < 2) {
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  // If no errors, call addParticipant() and clear fields
  if (containsErrors == false){
    
    addParticipant(null,person);
    toggleModal(person);

    for(let j = 0; j < rsvpInputs.length; j++){
      if (rsvpInputs[j].type === "submit") continue;
      rsvpInputs[j].value = "";
    }
  }
  

}

//  Replace the form button's event listener with a new one that calls validateForm()
form.addEventListener("submit",validateForm);



/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    //let modal = 0;
    const modal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-text");

    
    // Update modal display to flex
    modal.style.display = "flex";

    //  Update modal text to personalized message
    modalContent.textContent = "Your spot is saved and the menu is calling!\n" + person.name + " get ready to eat well!";

      modalImage = document.getElementById('modal-image');
      const intervalId = setInterval(animateImage,500);


    // Set modal timeout to 5 seconds
    setTimeout(() => {
      modal.style.display="none";
      clearInterval(intervalId);
      modalImage.style.transform = 'rotate(0deg)';

    }, 5000);
}

//  animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById('modal-image');

const animateImage = () => {
  if (rotateFactor === 0){
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;



}