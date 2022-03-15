<template>
    <div class="register-page">
        <form class="form">
            <my-input type="text" placeholder="username" v-model="user.name"></my-input>
            <my-input type="text" placeholder="email address" v-model="user.email"></my-input>
            <my-input type="text" placeholder="password" v-model="user.password"></my-input>
            <my-input type="text" placeholder="password confirmation" v-model="user.password_confirmation"></my-input>
            <my-button type="submit" @click.prevent="register">Registration</my-button>
            <router-link to="/user/login"> <p class="message">Already registered ? <a href="#">Create an account</a></p> </router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data: () => ({
        user: {
            name: "",
            email:"",
            password:"",
            password_confirmation: ""
        }
    }),
    methods: {
        register() {
            this.$store.dispatch('auth/registerUser', this.user)
        }
    }
}
</script>

<style lang="scss">
.register-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    display:flex;
}
</style>
