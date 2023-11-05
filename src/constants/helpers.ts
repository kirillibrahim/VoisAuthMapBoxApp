export const checkAuthStatus = (): boolean => {
    const loginStatus = localStorage.getItem("login");
    if(loginStatus && loginStatus === "true"){
        return true;
    }
    else{
        return false;
    }
}