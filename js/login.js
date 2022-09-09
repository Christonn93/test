import { store, load, hide } from "./dist/localstorage.js";

// Getting current time for local storage
const currentTime = new Date();

// Sign in class
class SignIn {
 constructor(form, fields) {
  this.form = form;
  this.fields = fields;
  this.validateOnSubmit();
 }

 // Running login function with validation
 validateOnSubmit() {
  let self = this;

  this.form.addEventListener("submit", (e) => {
   e.preventDefault();

   let error = 0;

   self.fields.forEach((field) => {
    const input = document.querySelector(`#${field}`);
    if (!self.validateInput(input)) {
     error++;
    }
   });

   // If no error submit and do API
   if (error == 0) {
    // Api function
    const data = {
     username: document.querySelector("#username").value,
     password: document.querySelector("#password").value,
    };

    // Base url
    const endpoint = "";
    const apiURL = `https://nf-api.onrender.com${endpoint}`;

    fetch(apiURL+`/api/v1/auth/login`, {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
    })
     .then((response) => response.json())
     .then((data) => {
     // Storing in localstorage
     localStorage.setItem("Auth", data.accessToken);
     return
     });



    // Setting up APi information
    fetch(apiURL + `/api/v1/auth/login`, {
     method: "POST",
     body: JSON.stringify(data),
     headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer` + localStorage.getItem("Auth"),
     },
    })
     .then((response) => response.json())
     .then((data) => {
      console.log(data);
     });

    this.form.submit();
    //  console.log(input.value);
   }
  });
 }

 // Validation for form fields
 validateInput(field) {
  // If fields are empty, display this
  if (field.value.trim() === "") {
   this.setStatus(field, `${field.previousElementSibling.innerText} can't be empty`, "error");
   return false;
  } else {
   // If password is to short, display this
   if (field.type == "password") {
    if (field.value.length < 5) {
     this.setStatus(field, `${field.previousElementSibling.innerText} must be wrong`, "error");
     return false;
    } else {
     // If password is ok, display this
     this.setStatus(field, null, "success");
     return true;
    }
   } else {
    // If fields are not empty, and password is ok, display this
    this.setStatus(field, null, "success");
    return true;
   }
  }
 }

 // Setting status for form fields
 setStatus(field, message, status) {
  const errorMessage = field.parentElement.querySelector(".error");

  // Setting up success for fields
  if ((status = "success")) {
   if (errorMessage) {
    errorMessage.innerText = "";
   }
   field.classList.add("success");
   field.classList.remove("warning");
  }

  // Setting up error for fields
  if ((status = "error")) {
   errorMessage.innerText = message;
   field.classList.add("warning");
  }
 }
}

// Selecting the form for the function to use
const form = document.querySelector("#signInForm");
if (form) {
 const fields = ["username", "password"];
 const validation = new SignIn(form, fields);
}
