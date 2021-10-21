import Take_note_icon from "../Take_note_icon/Take_note_icon.vue";
import { Service } from '../../service/Service';

export default {
    name: "Display_notes",
    components: {
        Take_note_icon,
    },
    props: {
        url: {
            type: String,
        },
    },
    data() {
        return {
            notes: {}
        }
    },  
    mounted() {
        Service.getmethod(this.url)
        .then((data) => {
            this.notes = data.data;
            this.notes = this.notes.reverse();
            // console.log(data);    
        })
        .catch((err) => {
            console.log(err)
        })
    },
}