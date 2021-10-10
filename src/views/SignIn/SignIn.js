import "./SignIn.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from "@/components/Footer/Footer.vue";
import useValidate from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';

export default {
    name: 'SignIn',
    components: {
        Textbox,
        Logocontent,
        Footer,
    },
    data() {
        return {
            v$: useValidate(),
            email: '',
            password: '',
        }
    },
    validations() {
        return {
            email: { 
                required: helpers.withMessage("Email cannot be empty", required),
                email: helpers.withMessage("Email invalid", email),
            },
            password: { 
                required: helpers.withMessage("Password cannot be empty", required), 
            },
        }
    },
    methods: {
        submit() {
            this.v$.$validate();
            console.log(this.v$);
        }
    },
}