<template>
    <div class="footer">
        <div class="text-content">
            <a :href="url" class="content"> {{ text }} </a>
        </div>

        <div class="nextbtn">
            <button class="next" type="submit" @click="submit">Next</button>
        </div>
    </div>
</template>

<script type="module" src="./Footer.js"></script>

<style scoped lang="scss">
    @import "./Footer.scss";
</style>