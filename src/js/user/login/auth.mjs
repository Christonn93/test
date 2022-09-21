import * as apiVar from "../../constant/variables.mjs";

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

  if (!response.ok) {
   window.location.href = "./profile.html";
   console.log("You are logged in", response);
  } else {
   window.location.href = "./";
  }
 } catch (error) {
  console.log(error);
 }
}
