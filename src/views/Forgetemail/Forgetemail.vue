<template>
    <div class="forgetemail">
        <form @submit.prevent="submit" class="forgetemail-container">
            <Logocontent text="Find your email" subtext="Enter your recovery email or phone number" />

            <Textbox type="text" name="email" label="Email or phone" :error_message="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model:data.sync="email" />

            <Footer text="" />
        </form>
    </div>
</template>
    
<script type="module" src="./Forgetemail.js"></script>    
