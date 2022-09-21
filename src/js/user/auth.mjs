import * as apiVar from "../constant/variables.mjs";
import { displayProfile } from "./profile.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointProfile = apiVar.profile;

export async function auth(token, name) {
 try {
  const request = await fetch(url + endpointProfile + `${name}`, {
   method: "get",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify(),
  });
  const response = await request.json();

  
  if (response) {
    alert("You are logged in");
   }


  if (token == undefined) {
   alert("User not registered");
  } else if (token == null) {
   alert("User not registered");
  } else {

  }
 } catch (error) {
  console.log(error);
 }
}
