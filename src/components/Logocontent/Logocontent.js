import Logo from '@/components/Logo/Logo.vue';

export default {
    name: "Logocontent",
    components: {
        Logo,
    },
    props: {
        text: {
            type: String,
        },
        subtext: {
            type: String,
        },
    }
}