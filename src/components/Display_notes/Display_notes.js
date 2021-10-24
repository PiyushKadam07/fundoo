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
        noteData: {
            type: String,
        },
    },
    data() {
        return {
            notes: this.noteData,
            editnote: false,
            iconopen: false,
            note: {
                title: "",
                description: "",
                color: "",
                id: "",
              },
        }
    },  
    watch: { 
        data: function(newVal) { 
        this.note = newVal
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
    methods: {
        getnote(key) {
            // console.log('inside get note', key);
            Service.getmethod('/notes/note/' + key)
            .then((data) => {
                // console.log(data);   
                this.note.title = data.data.title;
                this.note.description = data.data.description;
                this.note.color = data.data.color;
                this.note.id = data.data._id; 
                this.editnote = true;
            })
            .catch((err) => {
                console.log(err)
            })
        },
        updatenote(key) {
            let data1 = {
                "title" : this.note.title,
                "description" : this.note.description,
                "color" : this.note.color,
            };
            // console.log(key, data1)
            Service.patchnotemethod('/notes/update/' + key, data1)
            .then( 
                location.reload(),
                this.editnote = false
            )
            .catch((err) => {
                console.log(err)
            })
        }
    },
}