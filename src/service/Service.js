import axios from "axios";

var headerconfig;
let token = JSON.parse(localStorage.getItem('Login'));
if (token != null) {
    // console.log(token, token.gettoken)
    headerconfig = { headers: { 'authorization': 'Bearer ' + token.gettoken }};
}

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

    // display all notes, archive & bin notes, get specific id note
    static async getmethod(url) {
        // console.log(url, headerconfig)
        return await axios.get(url, headerconfig)
    }

    //create new note
    static async postnotemethod(url, data) {
        return await axios.post(url, data, headerconfig)
    }

    //archive a note, deleta a note, change note background color, update note method
    static async patchnotemethod(url, data) {
        // console.log(url, data)
        return await axios.patch(url, data, headerconfig)
    }
}
