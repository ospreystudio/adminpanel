<template>
    <div class="container">
        <Header />
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
import Header from "../ui/Header";
export default {
    components: {
        Header,
        Sidebar,
        Main
    },
    mounted() {
        this.getData()

    },
    methods: {
        getData() {
            axios.get('/api/get')
            .then(response => {
              console.log(response)
            })
        },
    }

}
</script>



<style lang="scss">

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
