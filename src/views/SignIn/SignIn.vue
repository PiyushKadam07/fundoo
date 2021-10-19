<template>
    <div class="signin">
        <form @submit.prevent="submit" class="signin-container">
            <Logocontent text="Sign In" subtext="Use your Fundoo Account" />

            <div class="email-container">
                <Textbox type="text" name="email" label="Email or phone" :error_message="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model:data.sync="email" />
            </div>

            <div class="email-container">
                <Textbox name="password" label="Password" type="password" :error_message="v$.password.$error ? v$.password.$errors[0].$message : ''" v-model:data.sync="password"/>
            </div>
            <a @click="forget_email()"> Forget email? </a>

            <div class="above-footer"> Not your computer? Use Guest mode to sign in privately.
                <a href="#">Learn more</a> 
            </div>
            <Footer text="Create account" />
        </form>
    </div>
    <Snackbar :text="this.text" :check=this.check :show=this.show />
    
</template>
    
<script type="module" src="./SignIn.js"></script>    

