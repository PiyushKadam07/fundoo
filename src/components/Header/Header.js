import Take_note from "../Take_note/Take_note.vue";
import Display_notes from "../Display_notes/Display_notes.vue";
// import { Service } from '../../service/Service';

export default {    
    components: {
        Take_note,
        Display_notes,
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
            window.location.assign('http://localhost:8080/notes');
        },
        archived() {
            console.log('inside archived');
            window.location.assign('http://localhost:8080/notes/archive');
        },
        deleted() {
            console.log('inside deleted');
            window.location.assign('http://localhost:8080/notes/bin');
        }
    }
}