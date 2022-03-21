<template>
<div>
    <header class="header">
        <img src="../../../img/logo.png" class="logo" alt="osprey logo">
        <nav class="user-nav">
            <div class="user-nav__user">
                <!--                    <img src="../../../img/user.png" alt="User Photo" class="user-nav__user-photo">-->
                <router-link v-if="token" :to="'/user/register'"><span class="user-nav__user-name">Registration</span> </router-link>
                <router-link v-if="token" :to="'/user/login'"><span class="user-nav__user-name">Login</span> </router-link>
                <my-button v-if="!token" type="submit" @click.prevent="logout">logout</my-button>
            </div>
        </nav>
    </header>
</div>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            token: null
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout', this.user)
        },
        getToken() {
            this.token = localStorage.getItem('x-token')
        }
    }
}
</script>

<style scoped>

</style>
