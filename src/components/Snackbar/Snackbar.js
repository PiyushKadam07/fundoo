export default {
    name: "Snackbar",
    props: {
        check: {
            type: Boolean,
        },
        show: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
        },
    },
    data() {
        return {
            hide: false,
        };
    },
}