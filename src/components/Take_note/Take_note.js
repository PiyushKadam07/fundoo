export default {
    name: "Take_note",
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