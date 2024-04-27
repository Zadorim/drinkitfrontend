import axios from "axios"


let token;

export function Login(logindata) {
    return axios.post ('http://localhost:5130/auth/login', logindata,
        response =>{
            token = response.data.token;
});
}

export function Logout() {
    return axios.post('http://localhost:5130/auth/logout', {},
        response=> {
            token = response.data.token;
});
}

export function Register(registerdata) {
    return axios.post('http://localhost:5130/auth/register', registerdata,
        response => {
            token = response.data.token;
})
};

export default AuthService;