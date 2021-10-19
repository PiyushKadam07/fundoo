<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div id="snackbar"  :class="[show ? 'open' : 'close']">
        <div v-if="check" id="snackbar-container" style='background-color: lightgreen;' :class="[!hide ? 'open' : 'close']">
            <p> {{ text }} </p>
            <span class="material-icons" @click="hide=!(hide)">close</span>
        </div>
        <div v-else id="snackbar-container" style='background-color: red;' :class="[!hide ? 'open' : 'close']">
            <p> {{ text }} </p>
            <span class="material-icons" @click="hide=!(hide)">close</span>
        </div>
    </div>
</template>

<script type="module" src="./Snackbar.js"></script>

<style scoped lang="scss">
    @import "./Snackbar.scss";
</style>