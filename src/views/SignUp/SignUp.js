import "./SignUp.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from '@/components/Footer/Footer.vue';
import useValidate from '@vuelidate/core';
import { required, alpha, sameAs, helpers, email } from '@vuelidate/validators';
import axios from "axios";

export default {
    name: 'SignUp',
    components: {
        Textbox,
        Logocontent,
        Footer,
    },
    data() {
        return {
            v$: useValidate(),
            firstname: '',
            lastname: '',
            email: '',
            password: {
                password: '',
                confirm: '',
            },
            showPassword: false,
        }
    },
    validations() {
        return {
            firstname: {
                required: helpers.withMessage("First Name cannot be empty", required),
                alpha: helpers.withMessage("Invalid First Name", alpha),  
            },
            lastname: { 
                required: helpers.withMessage("Last Name cannot be empty", required),
                alpha: helpers.withMessage("Invalid Last Name", alpha), 
            },
            email: { 
                required: helpers.withMessage("Email cannot be empty", required),
                email: helpers.withMessage("Email invalid", email),
            },
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
                    firstName: this.firstname,
                    lastName: this.lastname,
                    email: this.email,
                    password: this.password.password,
                };
                console.log(data);
                axios.post('http://localhost:3000/users/register', data)
                .then((data) => {
                    if( data.status == 200 ) {
                        window.location.assign("http://localhost:8080/signin");
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                console.log("Submit failed");
            }
        }
    }
}