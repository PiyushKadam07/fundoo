<template>
    <div v-if="!editnote" class="display_notes" @mouseover="iconopen = true" @mouseleave="iconopen = false">
        <div class="display_notes_container" v-for="note in notes" :key="note._id" :style="{'background-color': note.color}">
            <span class="title" @click="getnote(note._id)" v-text="note.title"></span>
            <p v-text="note.description" @click="getnote(note._id)"></p>
            <div id="icons" :_id="note._id" :class="[this.iconopen ? 'open' : 'çlose']" >
                <Take_note_icon :notedata="notes" :_id="note._id" :iconopen="this.iconopen" />
            </div>
        </div>
    </div>
    <div v-else class="update_note">
        <div class="update_note_container" :style="{ backgroundColor: note.color}">
            <div class="pair">
                <input type="text" placeholder="Title" v-model="note.title" autofocus :style="{ backgroundColor: note.color}">
            </div>
            <input type="text" placeholder="Take a note..." v-model="note.description" autofocus :style="{ backgroundColor: note.color}">
            <div class="pair">
                <Take_note_icon :notedata="notes" :_id="note.id" :iconopen="this.iconopen" />
                <button class="close-button" @click="updatenote(note.id)">Close</button>
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Display_notes.js"></script>

<style scoped lang="scss">
    @import "./Display_notes.scss";
</style>