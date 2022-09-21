import * as formAction from "./login/signIn.mjs";

const signIn = formAction.signIn;

export async function signUserIn() {
 try {
  document.querySelector("form#login").addEventListener("submit", (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.pw.value;

    signIn(email, password);
  });
 } catch (err) {
  console.log(err);
 }
}



