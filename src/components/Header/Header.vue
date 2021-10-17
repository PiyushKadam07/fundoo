<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="header">
        <div class="header-container">
            <div class="leftnav">
                <div class="left-container">
                    <span class="icon" @click="iconopen=!(iconopen)">☰</span>
                    <span class="title">Fundoo</span>
                </div>
            </div>
            <div class="centernav">
                <i class="material-icons">&#xe8b6;</i>
                <input type = "text" class="filter" placeholder="Search">
            </div>
            <div class="rightnav">
                <div class="right-container1">
                    <span class="material-icons">refresh</span>
                    <span class="material-icons">settings</span>
                    <span class="material-icons">dns</span>
                </div>
                <div class="right-container2">
                    <span class="material-icons">apps</span>
                    <span class="material-icons">account_circle</span>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="sidebar-container">
                <div role="button" class="icons-content">
                    <span class="material-icons">lightbulb</span>
                    <span :class="[iconopen ? 'open' : 'close']">Notes</span>
                </div>
                <div role="button" class="icons-content">
                    <span class="material-icons">notifications</span>
                    <span :class="[iconopen ? 'open' : 'close']">Reminder</span>
                </div>
                <div role="button" class="icons-content">
                    <span class="material-icons">edit</span>
                    <span :class="[iconopen ? 'open' : 'close']">Edit labels</span>
                </div>
                <div role="button" class="icons-content">
                    <span class="material-icons">archive</span>
                    <span :class="[iconopen ? 'open' : 'close']">Archive</span>
                </div>
                <div role="button" class="icons-content">
                    <span class="material-icons">delete</span>
                    <span :class="[iconopen ? 'open' : 'close']">Bin</span>
                </div>
            </div>
            <div class="content_container">
                <div class="take_a_note">
                    <Take_note />
                </div>
                <div class="display_notes">
                    <Display_notes />
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Header.js"></script>

<style scoped lang="scss">
    @import "./Header.scss";
</style>