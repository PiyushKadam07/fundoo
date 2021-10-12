import "./Resetpassword.scss";
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Textbox from '@/components/Textbox/Textbox.vue';
import Footer from '@/components/Footer/Footer.vue';
import useValidate from '@vuelidate/core';
import { required, helpers, sameAs } from '@vuelidate/validators';
import axios from "axios";

export default {
    name: 'Resetpassword',
    components: {
        Logocontent,
        Textbox,
        Footer,
    },
    data() {
        return {
            v$: useValidate(),
            password: {
                password: '',
                confirm: '',
            },
        }
    },
    validations() {
        return {
            password: {
                password: { 
                    required: helpers.withMessage("Password cannot be empty", required), 
                },
                confirm: { 
                    required: helpers.withMessage("Confirm Password cannot be empty", required),
                    sameAs: helpers.withMessage("Passwords do not match", sameAs(this.password.password)),
                },
            },
        }
    },
    methods: {
        submit() {
            this.v$.$validate();
            // console.log(this.v$);
            if (!this.v$.error) {
                let data = {
                    password: this.password.password,
                };
                console.log(data);
                let logindetail = JSON.parse(localStorage.getItem('Login'));
                console.log(logindetail);
                axios.patch('http://localhost:3000/users/reset/'+logindetail.gettoken, data)
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