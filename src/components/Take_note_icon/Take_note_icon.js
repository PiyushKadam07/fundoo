import { Service } from "../../service/Service";

export default {
    name: 'Take_note_icon',
    props: {
        notedata: {
            type: Object,
        },
        id: {
            type: String,
        },
    },
    data() {
        return {
            data: this.notedata
        }
    },
    methods: {
        archived() {
            // console.log('inside archived icon', this.data, this.id);
            Service.patchnotemethod('/notes/archive/' + this.id)
            .then((data) => {
                console.log(data);    
                location.reload();
            })
            .catch((err) => {
                console.log(err)
            }) 
        }
    }
}