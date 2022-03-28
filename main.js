// *** Alert Form ***

// Variables
const form = document.querySelector("#alertForm"); // Link .js variable to matching elements in html page. 
const alertInput = document.querySelector("#alertInput"); //Link .js variable to matching elements in html page.

// Event Listener
form.addEventListener("submit", function (event) { 
    event.preventDefault(); //Prevents form from refreshing

    console.log(alertInput.value); // Show user input in the console when "submit" is clicked.

    let message = "Hello, " + alertInput.value + "! Please order a sandwich and book an appointment for a haircut! Create an account before checking out!"; // Message to be displayed as an alert when "submit" is clicked.

    if (alertInput.value.length === 0) { // If there was nothing typed in the "enter your name" box, clicking "submit" will result in this message.
        alert("Error! Please enter a name!");
    } else {
        alert(message); // Entering text in the "enter your name" box will result in your input being added to the "message" variable and will print the modified statement to the screen as an alert.
    }

    alertInput.value = ""; // Resets "enter your name" box after the alert has been displayed.

});

// *** Create Sandwich Form ***

// Variables
const sandwichForm = document.querySelector("#sandwichForm");
const whiteBread = document.querySelector("#whiteBread");
const wheatBread = document.querySelector("#wheatBread");
const ryeBread = document.querySelector("#ryeBread");
const lettuce = document.querySelector("#lettuce");
const tomato = document.querySelector("#tomato");                   // Linking all .js variables to matching elements in html file.
const onion = document.querySelector("#onion");
const bellPepper = document.querySelector("#bellPepper");
const ham = document.querySelector("#ham");
const turkey = document.querySelector("#turkey");
const chicken = document.querySelector("#chicken");


// Event Listener
sandwichForm.addEventListener("submit", function (event) {
    event.preventDefault(); //Prevents form from refreshing

    let contains = "your sandwich is made up of: "; // Statement to be read when "submit" is clicked, followed by all checked ingredients.

    if (whiteBread.checked) {
        contains += "White bread ";
    }
    if (wheatBread.checked) {
        contains += "Wheat bread ";
    }
    if (ryeBread.checked) {
        contains += "Rye bread ";
    }
    if (lettuce.checked) {
        contains += "Lettuce ";
    }
    if (tomato.checked) {
        contains += "Tomato ";
    }
    if (onion.checked) {
        contains += "Onion ";
    }
    if (bellPepper.checked) {
        contains += "Bell Peppers ";
    }
    if (ham.checked) {
        contains += "Ham ";
    }
    if (turkey.checked) {
        contains += "Turkey ";
    }
    if (chicken.checked) {
        contains += "Chicken ";
    }

    alert(contains); // "contains" variable will be modified by adding all checked ingredients and printed to the screen as an alert. 

});

// *** Create Appointment Form ***

// Variables
const appointmentForm = document.querySelector("#appointmentForm");
const date = document.querySelector("#date");
const shortHair = document.querySelector("#shortHair");                 // Link all .js variables to matching elements in html file.
const longHair = document.querySelector("#longHair");

// Event Listener
appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing.

    let hairStyle = "Haircut scheduled for " + date.value + " with " + barber.value + " for "; // Message to be displayed when "submit" is clicked. 
    
    if (shortHair.checked) {
        hairStyle += "Short Hair ";
    }
    if (longHair.checked) {
        hairStyle += "Long Hair ";
    }

    alert(hairStyle); // Modified "hairstyle" variable will be printed to screen as an alert, including user inputs.

});


// *** Create Account Form ***

// Variables
const createAccount = document.querySelector("#createAccountForm");
const userName = document.querySelector("#userName");               
const userPassword = document.querySelector("#userPassword");           // Link all .js variables to matching elements in html file.
const userEmail = document.querySelector("#userEmail");
const confirmPassword = document.querySelector("#confirmPassword");

// Event Listener
createAccount.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from automatically refreshing.

    let success = "Your account has been created!" + " Username: " + userName.value + " Email: " + userEmail.value

    if (userPassword.value === confirmPassword.value) {
        alert(success);
    } else {
        alert("Passwords do not match! Try again.")
    }

});


