<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="header">
        <div class="header-container">
            <div class="leftnav">
                <div class="left-container">
                    <span class="icon" @click="this.iconopen=!(this.iconopen)">☰</span>
                    <div>
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png">
                        <span class="title"> {{ title }} </span>
                    </div>
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
                    <Account />
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="sidebar-container">
                <div role="button" :class="[page=='notes' ? 'active' : '']" @click="notes" class="icons-content" @mouseover="iconopen = true" @mouseleave="iconopen = false">
                    <span class="material-icons">lightbulb</span>
                    <span :class="[page!='' ? 'open' : 'close']">Notes</span>
                </div>
                <div role="button" class="icons-content" @mouseover="iconopen = true" @mouseleave="iconopen = false">
                    <span class="material-icons">notifications</span>
                    <span :class="[page!='' ? 'open' : 'close']">Reminder</span>
                </div>
                <div role="button" class="icons-content" @mouseover="iconopen = true" @mouseleave="iconopen = false">
                    <span class="material-icons">edit</span>
                    <span :class="[page!='' ? 'open' : 'close']">Edit labels</span>
                </div>
                <div role="button" :class="[page=='archive' ? 'active' : '']" class="icons-content" @click="archived" @mouseover="iconopen = true" @mouseleave="iconopen = false">
                    <span class="material-icons">archive</span>
                    <span :class="[page!='' ? 'open' : 'close']">Archive</span>
                </div>
                <div role="button" :class="[page=='bin' ? 'active' : '']" class="icons-content" @click="deleted" @mouseover="iconopen = true" @mouseleave="iconopen = false">
                    <span class="material-icons">delete</span>
                    <span :class="[page!='' ? 'open' : 'close']">Bin</span>
                </div>
            </div>
            <div class="content_container">
                <div class="take_a_note">
                    <Take_note />
                </div>
                <Display_notes :url="url"/>    
            </div>
        </div>
    </div>
</template>

<script type="module" src="./Header.js"></script>

<style scoped lang="scss">
    @import "./Header.scss";
</style>