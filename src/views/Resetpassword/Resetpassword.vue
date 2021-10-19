<template>
    <div class="resetpassword">
        <form @submit.prevent="submit" class="resetpassword-container">
            <Logocontent text="Reset Password" />

            <Textbox name="password" label="Password" type="password" :error_message="v$.password.password.$error ? v$.password.password.$errors[0].$message : ''" v-model:data.sync="password.password" />

            <Textbox name="confirm" label="Confirm" type="password" :error_message="v$.password.confirm.$error ? v$.password.confirm.$errors[0].$message : ''" v-model:data.sync="password.confirm" />

            <Footer text="" />
        </form>
    </div>
    <Snackbar :text="this.text" :check=this.check :show=this.show />
    
</template>
    
<script type="module" src="./Resetpassword.js"></script>    

