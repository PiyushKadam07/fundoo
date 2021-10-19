import "./Forgetemail.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from '@/components/Footer/Footer.vue';
import Snackbar from "@/components/Snackbar/Snackbar.vue";
import useValidate from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import { Service } from '../../service/Service';

export default {
    name: 'Forgetemail',
    components: {
        Logocontent,
        Textbox,
        Footer,
        Snackbar,
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
            if (!this.v$.$error) {
                let data = {
                    email: this.email,
                };
                console.log(data);
                this.text="Email request sent";
                this.check=true;
                this.show=true;
                Service.postmethod('/users/forget/614027b836b8563f1ec46cad', data)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                this.text="Invalid email";
                this.check=false;
                this.show=true;
                console.log("Submit failed");
            }
        }
    },
}