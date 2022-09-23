import { auth } from "./login/auth.mjs";
/**
 *
 * This is just a add event listener for the form on the login page. After the event have happened it runs the function to login the user whit "Email" and "password"
 *
 */
export async function formEvent() {
 try {
  const form = document.querySelector("form#login");
  form.addEventListener("submit", (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.pw.value;

   auth(email, password);
  });
 } catch (err) {
  console.log(err);
 }
}
