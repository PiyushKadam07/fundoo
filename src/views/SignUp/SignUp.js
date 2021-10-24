import "./SignUp.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from '@/components/Footer/Footer.vue';
import Snackbar from "@/components/Snackbar/Snackbar.vue";
import useValidate from '@vuelidate/core';
import { required, alpha, sameAs, helpers, email } from '@vuelidate/validators';
import { Service } from '../../service/Service';

export default {
    name: 'SignUp',
    components: {
        Textbox,
        Logocontent,
        Footer,
        Snackbar,
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
            show: false,
            check: false,
            text: '',
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
            console.log(this.v$);
            if (!this.v$.$error) {
                let data = {
                    firstName: this.firstname,
                    lastName: this.lastname,
                    email: this.email,
                    password: this.password.password,
                };
                this.text="Registered successfully";
                this.check=true;
                this.show=true;
                console.log(data);
                Service.postmethod('/users/register', data)
                .then((data) => {
                    if( data.status == 200 ) {
                        this.$router.push("/signin");
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                this.text="Registration failed";
                this.check=false;
                this.show=true;
                console.log("Submit failed");
            }
        }
    }
}