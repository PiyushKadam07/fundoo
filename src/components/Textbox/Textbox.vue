<template>
    <div class="textbox">
        <div class="textbox-container">
            <input :type="type" :id="name" :name="name" placeholder=" " :class="[error_message!=='' ? 'error' : '']" v-model="data" @keyup="$emit('update:data', data);"/>
            <label :for="name" v-if="label" v-html="label" :class="[error_message!=='' ? 'error' : '']"></label>
        </div>
        <small class="small-error" v-if="error_message"> {{ error_message }} </small>
    </div>
</template>

<script type="module" src="./Textbox.js"></script>

<style scoped lang="scss">
    @import "./Textbox.scss";
</style>
