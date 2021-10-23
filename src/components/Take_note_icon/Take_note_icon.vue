<template>
    <div id="icons11" :class="[this.iconopen ? 'open' : 'close']">
        <span class="material-icons">notifications_none</span>
        <span class="material-icons">person_add_alt_1</span>
        <span class="material-icons">palette</span>
        <span class="material-icons">image</span>
        <span class="material-icons" @click="archived()">archive</span>
        <span class="material-icons" @click="deleted()">more_vert</span>
    </div>
</template>

<script type="module" src="./Take_note_icon.js"></script>

<style scoped lang="scss">
    @import "./Take_note_icon.scss";
</style>