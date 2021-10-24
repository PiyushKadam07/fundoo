import Take_note from "../Take_note/Take_note.vue";
import Display_notes from "../Display_notes/Display_notes.vue";
import Account from "../Account/Account.vue";

export default {    
    components: {
        Take_note,
        Display_notes,
        Account,
    },
    props: {
        title: {
            type: String,
        },
        url: {
            type: String,
        },
        page: {
            type: String,
        },
    },
    data() {
        return {
            iconopen: false,
        };
    },
    methods: {
        notes() {
            console.log('inside notes');
            this.$router.push("/notes");
        },
        archived() {
            console.log('inside archived');
            this.$router.push("/notes/archive");
        },
        deleted() {
            console.log('inside deleted');
            this.$router.push("/notes/bin");
        }
    }
}