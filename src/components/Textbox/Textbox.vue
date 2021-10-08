<template>
    <div class="textbox">
        <div class="textbox-container">
            <input :type="type" :id="name" :name="name" :placeholder="placeholder" :v-model="name" />
            <label :for="name" v-if="label" v-html="label" :class="[error ? 'error' : '']"></label>
        </div>
        <small class="small-error" v-if="error" v-html="error"></small>
    </div>
</template>

<script type="module" src="./Textbox.js"></script>

<style scoped lang="scss">
    @import "./Textbox.scss";
</style>
