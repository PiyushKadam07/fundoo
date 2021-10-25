import "./Bin.scss";
import Header from '@/components/Header/Header.vue';

export default {
    name: 'Bin',
    components: {
        Header,
    },
    beforeMount() {
        let token = JSON.parse(localStorage.getItem('Login'));
        if (token == null) {
            this.$router.push("/signin");
        }
    }
}