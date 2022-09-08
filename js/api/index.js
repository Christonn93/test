import { load } from "../dist/localstorage.js"


// Setting up APi information
const apiURL = `https://nf-api.onrender.com`

function headers(isJson = true) {
    const headers = {}
    const token = load("token");
    
    if (isJson) {
      headers["Content-Type"] = "application/json"
    }
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  
    return headers
  }

// Exporting API function
export async function connectApi(endpoint){
    try {
        const req = await fetch(apiURL, headers);
        const res = await req.json();

        console.log(res)
    } catch (error) {
        
    }
}