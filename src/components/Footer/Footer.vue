<template>
    <div class="footer">
        <div class="text-content">
            <!-- <router-link :to="{ name: 'Signin' }" class="content"> {{ text }} </router-link> -->
            <a href="#" class="content"> {{ text }} </a>
        </div>

        <div class="nextbtn">
            <button class="next" @click="submit">Next</button>
        </div>
    </div>
</template>

<script type="module" src="./Footer.js"></script>

<style scoped lang="scss">
    @import "./Footer.scss";
</style>