import "./SignIn.scss";
import Textbox from '@/components/Textbox/Textbox.vue';
import Logocontent from '@/components/Logocontent/Logocontent.vue';
import Footer from "@/components/Footer/Footer.vue";
import Snackbar from "@/components/Snackbar/Snackbar.vue";
import useValidate from '@vuelidate/core';
import { required, helpers, email } from '@vuelidate/validators';
import { Service } from '../../service/Service';

export default {
    name: 'SignIn',
    components: {
        Textbox,
        Logocontent,
        Footer,
        Snackbar,
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
            // console.log(this.v$);
            if (!this.v$.$error) {
                let data = {
                    email: this.email,
                    password: this.password,
                };
                // console.log(data);
                this.text="Login successfull";
                this.check=true;
                this.show=true;
                Service.postmethod('/users/login', data)
                .then((data) => {
                    if( data.status == 200 ) {
                        console.log(data.data.gettoken,data.data.detail._id);
                        let tokens = {
                            gettoken: data.data.gettoken,
                            id: data.data.detail._id
                        }
                        localStorage.setItem('Login',JSON.stringify(tokens));
                        this.$router.push("/notes");
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                this.text="Login failed";
                this.check=false;
                this.show=true;
                console.log("Submit failed");
            }
        },
        forget_email() {
            let logindetail = JSON.parse(localStorage.getItem('Login'));
            // console.log(logindetail, logindetail.id);
            if ( logindetail != null ) {
                window.location.assign("http://localhost:8080/forget_email/"+logindetail.id);
            }
        }
    },
}