import "./SignUp.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from '@/components/Footer/Footer.vue';
import useValidate from '@vuelidate/core';
import { required, alpha, sameAs, helpers, email } from '@vuelidate/validators';

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
    // watch: {
    //     firstname(newval, oldval) {
    //         console.log(newval, oldval)
    //     }
    // },
    methods: {
        submit() {
            this.v$.$validate();
            console.log(this.v$);
        }
    },
}