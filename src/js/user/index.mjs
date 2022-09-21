import * as formAction from "./signIn.mjs";

const signIn = formAction.signIn;

export async function signUserIn() {
 try {
  document.querySelector("form#login").addEventListener("submit", (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.pw.value;

   if (!email == `[\w\-\.]+@(stud\.)?noroff\.no]`) {
    alert("no valid user");
   } else {
    signIn(email, password);
   }
  });
 } catch (err) {
  console.log(err);
 }
}
