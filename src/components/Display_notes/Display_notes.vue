<template>
    <div class="display_notes" @mouseover="iconopen = true" @mouseleave="iconopen = false">
        <div class="display_notes_container" @click="updateNote(key)" v-for="note in notes" :key="note._id" :style="{'background-color': note.color}">
            <span class="title" v-text="note.title">  </span>
            <p v-text="note.description">  </p>
            <div id="icons" :_id="note._id" :class="[this.iconopen ? 'open' : 'çlose']" >
                <Take_note_icon :notedata="notes" :_id="note._id" :iconopen="this.iconopen" />
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Display_notes.js"></script>

<style scoped lang="scss">
    @import "./Display_notes.scss";
</style>