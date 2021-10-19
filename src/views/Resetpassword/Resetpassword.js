import "./Resetpassword.scss";
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Textbox from '@/components/Textbox/Textbox.vue';
import Footer from '@/components/Footer/Footer.vue';
import Snackbar from "@/components/Snackbar/Snackbar.vue";
import useValidate from '@vuelidate/core';
import { required, helpers, sameAs } from '@vuelidate/validators';
import { Service } from '../../service/Service';

export default {
    name: 'Resetpassword',
    components: {
        Logocontent,
        Textbox,
        Footer,
        Snackbar,
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
            if (!this.v$.$error) {
                let data = {
                    password: this.password.password,
                };
                console.log(data);
                let logindetail = JSON.parse(localStorage.getItem('Login'));
                console.log(logindetail);
                this.text="Password changed successfully";
                this.check=true;
                this.show=true;
                Service.resetpassword('/users/reset/', data, logindetail)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                this.text="Reset password failed";
                this.check=false;
                this.show=true;
                console.log("Submit failed");
            }
        }
    },
}