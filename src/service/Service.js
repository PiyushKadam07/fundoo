import axios from "axios";

export class Service {
    constructor() {

    }

    static async signup(data) {
        await axios.post('/users/register', data)
        .then((data) => {
            if( data.status == 200 ) {
                window.location.assign("http://localhost:8080/signin");
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static async signin(data) {
        await axios.post('/users/login', data)
        .then((data) => {
            if( data.status == 200 ) {
                console.log(data.data.gettoken,data.data.detail._id);
                let tokens = {
                    gettoken: data.data.gettoken,
                    id: data.data.detail._id
                }
                localStorage.setItem('Login',JSON.stringify(tokens));
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static async resetpassword(data, logindetail) {
        await axios.patch('/users/reset/'+logindetail.gettoken, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static async forgetemail(data) {
        await axios.post('/users/forget/614027b836b8563f1ec46cad', data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
