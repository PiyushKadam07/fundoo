import Take_note_icon from "../Take_note_icon/Take_note_icon.vue";
import { Service } from '../../service/Service';

export default {
    name: "Display_notes",
    components: {
        Take_note_icon,
    },
    data() {
        return {
            notes: {}
        }
    },
    mounted() {
        Service.getmethod('/notes/allnotes')
        .then((data) => {
            this.notes = data.data;
            // console.log(data);    
        })
        .catch((err) => {
            console.log(err)
        })
    },
}