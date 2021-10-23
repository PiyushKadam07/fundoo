import Take_note_icon from "../Take_note_icon/Take_note_icon.vue";
import { Service } from "../../service/Service";

export default {
    name: "Take_note",
    components : {
        Take_note_icon,
    },
    data() {
        return {
            iconopen: true,
            notes: false,
            data: {
                title: '',
                description: '',
                color: '#ffffff',
            }
        };
    },
    methods: {
        newNoteSwitch(){
            this.notes = !this.notes
            console.log(this.data, this.data.title)
            if( this.data.title != '' && this.data.description != '' ) {
                Service.postnotemethod('/notes', this.data)
                .then((data) => {
                    console.log(data);    
                    location.reload();
                })
                .catch((err) => {
                    console.log(err)
                })
            }
            else {
                console.log("Cannot add empty note");
            } 
        }
    },
}