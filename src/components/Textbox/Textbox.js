export default {
    name: "TextBox",
    props: {
        label: {
            type: String,
        },
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        error_message: {
            type: String,
        },
    },
    data() {
        return {
            data: '',
        };
    }
};