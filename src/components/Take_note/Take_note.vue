<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="take_note_container">
        <div class="take_note" v-if="!$route.fullPath.startsWith('/notes/')">
            <div :class="[notes ? 'open' : 'close']">
                <input type="text" placeholder="Title" v-model="data.title" id="take_a_note">
            </div>
            <div class="takenote">
                <textarea rows="1" cols="50" id="take_a_note" placeholder="Take a note..." v-model="data.description" @click="notes=true"></textarea>
                <div id="icons" :class="[notes ? 'open' : 'close']">
                    <span class="material-icons" id="check">check</span>
                    <span class="material-icons">brush</span>
                    <span class="material-icons">image</span>
                </div>
            </div>
            <div id="icons1" :class="[notes ? 'open' : 'close']">
                <Take_note_icon :notedata="data" :iconopen="iconopen" />
                <div>
                    <button class="close-button" type="button" @click="newNoteSwitch()">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Take_note.js"></script>

<style scoped lang="scss">
    @import "./Take_note.scss";
</style>