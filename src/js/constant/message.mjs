/**
 * 
 * @param {*} type 
 */
export function message(type) {
    // Selecting html
    const main = document.querySelector("");
    const errorContainer = document.createElement("div");
   
    // Setting the innerHTML of the message
    const error = "Oh no. Something really bad went wrong here.... Try again later";
    const success = "Oh yes. everything went well!";
    const alert = "THIS IS AN ALERT FROM THE CREATOR";
    const warning = "THIS IS A WARNING";
    const notValidUser = "We could not find a registered user with that email or password. Please try again or register a user"
   
    // Switch to define what feedback should be given
    switch (type) {
     case "error":
      errorContainer.classList.add("feedback-container", "error");
      errorContainer.innerHTML = `<p>${error}</p>`;
      break;
   
     case "success":
      errorContainer.classList.add("feedback-container", "success");
      errorContainer.innerHTML = `<p>${success}</p>`;
      break;
   
     case "alert":
      errorContainer.classList.add("feedback-container", "alert");
      errorContainer.innerHTML = `<p>${alert}</p>`;
      break;
   
     case "warning":
      errorContainer.classList.add("feedback-container", "warning");
      errorContainer.innerHTML = `<p>${warning}</p>`;
      break;
   
      case "invalid":
      errorContainer.classList.add("feedback-container", "alert");
      errorContainer.innerHTML = `<p>${notValidUser}</p>`;
      break;
   
    }
    main.append(errorContainer);
   }