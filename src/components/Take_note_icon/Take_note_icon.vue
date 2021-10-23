<template>
    <div id="icons11" :class="[this.iconopen ? 'open' : 'close']">
        <span class="material-icons">notifications_none</span>
        <span class="material-icons">person_add_alt_1</span>
        <span class="material-icons" @click="noteColors=true">palette</span>
        <span class="material-icons">image</span>
        <span class="material-icons" @click="archived()">archive</span>
        <span class="material-icons" @click="deleted()">more_vert</span>
    </div>
    <div v-show="noteColors" @mouseover="noteColors=true" @mouseleave="noteColors=false" class="color-palette">
        <div class="color" style="border: 2px solid #c4c4c4" @click="changeColor('#ffffff')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #f28b82" @click="changeColor('#f28b82')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #fbbc04" @click="changeColor('#fbbc04')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #fff475" @click="changeColor('#fff475')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #ccff90" @click="changeColor('#ccff90')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #a7ffeb" @click="changeColor('#a7ffeb')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #cbf0f8" @click="changeColor('#cbf0f8')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #aecbfa" @click="changeColor('#aecbfa')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #d7aefb" @click="changeColor('#d7aefb')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #fdcfe8" @click="changeColor('#fdcfe8')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #e6c9a8" @click="changeColor('#e6c9a8')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <div class="color" style="background-color: #e8eaed" @click="changeColor('#e8eaed')">
            <svg xmlns="http://www.w3.org/2000/svg" :id="[!noteColors ? 'open' : 'close']" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
    </div>
</template>

<script type="module" src="./Take_note_icon.js"></script>

<style scoped lang="scss">
    @import "./Take_note_icon.scss";
</style>