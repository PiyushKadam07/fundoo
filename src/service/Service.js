import axios from "axios";

let token = JSON.parse(localStorage.getItem('Login'));
// console.log(token, token.gettoken)
const headerconfig = { headers: { 'authorization': 'Bearer ' + token.gettoken }};

export class Service {
    constructor() {

    }

    // signup, signin, forgetemail
    static async postmethod(url, data) {
        return await axios.post(url, data)
    }

    // reset password
    static async patchmethod(url, data, logindetail) {
        return await axios.patch(url+logindetail.gettoken, data)
    }

    // display all notes, archive & bin notes
    static async getmethod(url) {
        // console.log(url, headerconfig)
        return await axios.get(url, headerconfig)
    }

    //create new note
    static async postnotemethod(url, data) {
        return await axios.post(url, data, headerconfig)
    }

    //archive note
    static async patchnotemethod(url) {
        // console.log(url)
        return await axios.patch(url, {}, headerconfig)
    }
}
