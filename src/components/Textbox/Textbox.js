export default {
    name: "TextBox",
    props: {
        label: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "name",
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: " ",
        },
    },
    data() {
        return {
            data: "",
        };
    },
};