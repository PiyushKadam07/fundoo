<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="take_note_container">
        <div class="take_note">
            <input type="text" placeholder="Title" id="take_a_note" :class="[notes ? 'open' : 'close']">
            <div class="takenote">
                <!-- <input type="text" placeholder="Take a note..." id="take_a_note"> -->
                <textarea rows="1" cols="50" id="take_a_note" placeholder="Take a note..." @click="newNoteSwitch"></textarea>
                <div id="icons" :class="[notes ? 'open' : 'close']">
                    <span class="material-icons" id="check">check</span>
                    <span class="material-icons">brush</span>
                    <span class="material-icons">image</span>
                </div>
            </div>
            <div id="icons1" :class="[notes ? 'open' : 'close']">
                <div class="icons11">
                    <span class="material-icons">notifications_none</span>
                    <span class="material-icons">person_add_alt_1</span>
                    <span class="material-icons">palette</span>
                    <span class="material-icons">image</span>
                    <span class="material-icons">archive</span>
                    <span class="material-icons">more_vert</span>
                </div>
                <div>
                    <button class="close-button" @click="newNoteSwitch()">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Take_note.js"></script>

<style scoped lang="scss">
    @import "./Take_note.scss";
</style>