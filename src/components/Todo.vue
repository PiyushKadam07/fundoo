<template>
    <div>
        <Addtodo />
        <div class="hello">
            <div class="container" v-for="items in alltodos" :key="items.id">
                {{ items.title }}
                <button @click="deletetodo(items.id)"> Delete </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Addtodo from "./Addtodo.vue";

export default {
    name: "Todo",
    components: {
        Addtodo,
    },

    methods: {
        ...mapActions(["getAlltodos", "deletetodo"]),
    },

    computed: mapGetters(["alltodos"]),

    created() {
        this.getAlltodos();
    }
};
</script>

<style scoped lang="scss">

</style>