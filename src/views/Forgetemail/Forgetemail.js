import "./Forgetemail.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from '@/components/Footer/Footer.vue';
import useValidate from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import axios from "axios";

export default {
    name: 'Forgetemail',
    components: {
        Logocontent,
        Textbox,
        Footer,
    },
    data() {
        return {
            v$: useValidate(),
            email: '',
        }
    },
    validations() {
        return {
            email: { 
                required: helpers.withMessage("Email cannot be empty", required),
                email: helpers.withMessage("Email invalid", email),
            },
        }
    },
    methods: {
        submit() {
            this.v$.$validate();
            // console.log(this.v$);
            if (!this.v$.error) {
                let data = {
                    email: this.email,
                };
                console.log(data);
                axios.post('http://localhost:3000/users/forget/614027b836b8563f1ec46cad', data)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                console.log("Submit failed");
            }
        }
    },
}