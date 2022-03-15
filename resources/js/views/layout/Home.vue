<template>
    <div class="container">
        <header class="header">
            <img src="../../../img/logo.png" class="logo" alt="osprey logo">
            <nav class="user-nav">
                <div class="user-nav__user">
<!--                    <img src="../../../img/user.png" alt="User Photo" class="user-nav__user-photo">-->
                   <router-link v-if="!token" :to="'/user/register'"><span class="user-nav__user-name">Registration</span> </router-link>
                    <router-link v-if="!token" :to="'/user/login'"><span class="user-nav__user-name">Login</span> </router-link>
                    <my-button v-if="token" type="submit" @click.prevent="logout">logout</my-button>
                </div>
            </nav>
        </header>
        <div class="content">
            <Sidebar />
            <Main />
        </div>
    </div>
</template>



<script>

import axios from '../../../axios/axios-instance'
import Main from "./Main";
import Sidebar from "./Sidebar";
export default {
    components: {
        Sidebar,
        Main
    },
    data() {
      return {
          token: null
      }
    },
    mounted() {
        this.getData()
        this.getToken()
    },
    methods: {
        getData() {
            axios.get('/api/get')
            .then(response => {
              console.log(response)
            })
        },
        logout() {
            this.$store.dispatch('auth/logout', this.user)
        },
        getToken() {
            this.token = localStorage.getItem('x-token')
        }
    }

}
</script>



<style scoped lang="scss">

.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-grey-light-2);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
}

.header {
    height: 7rem;
    background-color: var( --color-primary-dark);
    border-bottom: var(--color-grey-light-2);

    display: flex;
    justify-content: space-between;
    align-items: center;


}
.content {
    display: flex;
}

.logo {
    height: 3.25rem;
    margin-left: 7rem;
}



.user-nav {

    align-self: stretch;
    display: flex;
    align-items: center;

    & > * {
        padding: 0 2rem;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    }

    &__user-photo {
        height: 3.75rem;
        border-radius: 50%;
        margin-left: 3rem;
        padding: 0 2rem;
    }

    &__user-name {
        padding: 0 3px;
        text-decoration: none;
        color: var(--color-grey-light-4)
    }

}




</style>
