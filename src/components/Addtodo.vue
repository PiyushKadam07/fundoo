<template>
    <div class="addtodo">
        <p> Addtodo </p>
        <input type="text" v-model="title"/>
        <button @click="addtodo1()">Add todos</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "Addtodo",
    data() {
        return {
            title:''
        }
    },
    methods: {
        ...mapActions(["addtodo"]),
        addtodo1() {
            this.addtodo(this.title)
        }
    }
}
</script>
