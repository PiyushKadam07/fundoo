import { Service } from "../../service/Service";

export default {
    name: 'Take_note_icon',
    props: {
        notedata: {
            type: Object,
        },
        _id: {
            type: String,
        },
        iconopen: {
            type: Boolean,
        },
    },
    data() {
        return {
            noteColors: false,
            data: this.notedata,
        }
    },
    watch: { 
        data: function(newVal) { 
        this.data = newVal
        }
    },
    methods: {
        archived() {
            // console.log('inside archived icon', this.data, this._id);
            Service.patchnotemethod('/notes/archive/' + this._id)
            .then((data) => {
                console.log(data);    
                // location.reload();
            })
            .catch((err) => {
                console.log(err);
            }) 
        },
        deleted() {
            // console.log('inside archived icon', this.data, this._id);
            Service.patchnotemethod('/notes/delete/' + this._id)
            .then((data) => {
                console.log(data);    
                // location.reload();
            })
            .catch((err) => {
                console.log(err);
            }) 
        },
        changeColor(color) {
            for( const note in this.data) {
                // console.log(note, this.data[note]._id, this._id)
                if( this.data[note]._id == this._id ) {
                    // console.log(this.data[note].color)
                    this.data[note].color = color;
                    let data1 = {
                        "color" : color,
                    };
                    Service.patchnotemethod('/notes/update/' + this._id, data1)
                    .then((data) => {
                        console.log(data);  
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }
            } 
        }
    }
}