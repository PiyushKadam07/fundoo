<template>
    <div class="signin">
        <div class="signin-container">
            <Logocontent text="Sign In" subtext="Use your Fundoo Account"/>

            <div class="email-container">
                <Textbox type="text" name="email" label="Email or phone" />
            </div>

            <div class="email-container">
                <Textbox name="password" label="Password" type="password" />
            </div>
            <a href="#"> Forget email? </a>

            <div class="above-footer"> Not your computer? Use Guest mode to sign in privately.
                <a href="#">Learn more</a> 
            </div>
            <Footer text="Create account" />
        </div>
    </div>
</template>
    
<script type="module" src="./SignIn.js"></script>    

