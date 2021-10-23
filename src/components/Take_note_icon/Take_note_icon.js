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
            data: this.notedata,
        }
    },
    methods: {
        archived() {
            // console.log('inside archived icon', this.data, this._id);
            Service.patchnotemethod('/notes/archive/' + this._id)
            .then((data) => {
                console.log(data);    
                location.reload();
            })
            .catch((err) => {
                console.log(err)
            }) 
        },
        deleted() {
            // console.log('inside archived icon', this.data, this._id);
            Service.patchnotemethod('/notes/delete/' + this._id)
            .then((data) => {
                console.log(data);    
                location.reload();
            })
            .catch((err) => {
                console.log(err)
            }) 
        },
    }
}