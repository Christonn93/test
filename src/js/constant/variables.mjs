// Empty variables for use whit endpoints to api
const id = "";
const name = "";
const symbol = "";

const email = "";
const password = "";

/* 

 ============= ENDPOINTS ============= 

*/

// Base url for the api
export const baseURL = `https://nf-api.onrender.com/api/v1`;

// Endpoint for registrations and login
export const login = `/social/auth/login`;
export const register = `/social/auth/register`;

// Endpoint for everything related to profile
export const profile = `/social/profiles/`;
export const getProfile = `/social/profiles/${name}`;
export const media = `/social/profiles/${name}/media`;
export const follow = `/social/profiles/${name}}/follow`;
export const unFollow = `/social/profiles/${name}/unfollow`;

// Endpoint for everything related to posts
export const getPosts = `/social/posts/`;
export const putPost = `/social/posts/${id}`;
export const deletePost = `/social/posts/${id}`;
export const reactPost = `/social/posts/${id}/react/${symbol}`;
export const comments = `/social/posts/${id}/comment`;

/* 

 =============  OPTIONS ============= 

*/

const token = localStorage.getItem("token");

export const methods = {
    get: "GET",
    post: "POST",
    put: "PUT",
    del: "DELETE",
}

export const header = {
 method: "post",
 headers: {
  "Content-Type": "application/json",
 },
 body: JSON.stringify({ email, password }),
};

export const headerAuth = {
    method: "post",
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ email, password }),
   };
