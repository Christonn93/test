const auth = new Auth();

document.querySelector("#signOut").addEventListener("click", (e) => {
 auth.signOut();
});
