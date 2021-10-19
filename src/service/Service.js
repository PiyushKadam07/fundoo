import axios from "axios";

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
}
