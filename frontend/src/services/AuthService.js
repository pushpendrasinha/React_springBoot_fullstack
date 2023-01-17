import axios from "axios";

const AUTH_URL = "http://localhost:8080/auth/";

class AuthService{

    register(user){
        return axios.post(AUTH_URL + "signup", user);
    }

    login(user){
        return axios.post(AUTH_URL + "login", user ).then((res) => {
            if(res.data.accessToken){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });       
    }

    logout() {
         localStorage.clear();
    };

}

export default new AuthService;