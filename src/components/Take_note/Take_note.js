import Take_note_icon from "../Take_note_icon/Take_note_icon.vue";

export default {
    name: "Take_note",
    components : {
        Take_note_icon,
    },
    data() {
        return {
            notes: false,
        };
    },
    methods: {
        newNoteSwitch(){
            this.notes = !this.notes
        }
    },
}