<template>
    <div class="display_notes">
        <div class="display_notes_container" v-for="note in notes" :key="note._id" :style="{'background-color': note.color}">
            <span class="title" v-text="note.title">  </span>
            <p v-text="note.description">  </p>
            <div class="icons">
                <Take_note_icon :notedata="notes" :id="note._id" />
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Display_notes.js"></script>

<style scoped lang="scss">
    @import "./Display_notes.scss";
</style>