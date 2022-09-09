class Auth {
    constructor(){
        document.querySelector("body").style.display = "none";
        const auth = localStorage.getItem("Auth");
        this.validateAuth(auth);
    }
    
    validateAuth(auth){
        if(auth !== `${auth}`){
            window.location.replace("./")
        }else {
            document.querySelector("body").style.display = "block";
        }
    }
    
    signOut(){
        localStorage.removeItem("auth");
        window.location.replace("./")
    }   
}