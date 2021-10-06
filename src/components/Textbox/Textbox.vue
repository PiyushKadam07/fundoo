<template>
    <div class="textbox">
        <div class="textbox-container">
            <input :type="type" :id="name" :name="name" :placeholder="placeholder" v-model="data"/>
            <label :for="name" v-if="label" v-html="label"></label>
        </div>
    </div>
</template>

<script type="module" src="./Textbox.js"></script>

<style scoped lang="scss">
    @import "./Textbox.scss";
</style>
