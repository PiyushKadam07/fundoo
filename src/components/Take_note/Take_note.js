export default {
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