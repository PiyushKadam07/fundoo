// import useValidate from '@vuelidate/core';
// import { required, alpha, sameAs } from '@vuelidate/validators';
// import { reactive, computed } from 'vue';

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
        error: {
            type: Boolean,
        },
        size: {
            type: String,
        },
    },
    // setup() {
    //     const state = reactive ({
    //         firstname: '',
    //         lastname: '',
    //         email: '',
    //         password: '',
    //         confirm: '',
    //     })

    //     const rules = computed(() => {
    //         return {
    //             firstname: { required, alpha },
    //             lastname: { required, alpha },
    //             email: { required },
    //             password: { required },
    //             confirm: { required , sameAs: sameAs(state.password)},
    //         }
    //     })

    //     const v$ = useValidate(rules, state)

    //     return {
    //         state,
    //         v$
    //     }
    // }
    // data() {
    //     return {
    //         v$: useValidate(),
    //         firstname: '',
    //         lastname: '',
    //         email: '',
    //         password: '',
    //         confirm: '',
    //     }
    // },
    // validations() {
    //     return {
    //         firstname: { alpha },
    //         lastname: { alpha },
    //         email: { required },
    //         password: { required },
    //         confirm: { required },
    //     }
    // }
    data() {
        return {
            data: "",
        };
    },
};