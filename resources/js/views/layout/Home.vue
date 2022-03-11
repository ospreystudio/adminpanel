<template>
    <div class="container">
        <header class="header">
            <img src="../../../img/logo.png" class="logo" alt="osprey logo">
            <nav class="user-nav">
                <div class="user-nav__user">
                    <img src="../../../img/user.png" alt="User Photo" class="user-nav__user-photo">
                    <span class="user-nav__user-name">Justin Moreyl</span>
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

import Main from "./Main";
import Sidebar from "./Sidebar";
export default {
    components: {
        Sidebar,
        Main
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

}




</style>
