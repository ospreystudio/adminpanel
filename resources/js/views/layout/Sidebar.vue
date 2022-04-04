<template>
    <nav class="sidebar">
        <ul class="side-nav">
            <router-link :to="'/user/dashboard'"> <li class="side-nav__item">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../../../img/sprite.svg#icon-home2"></use>
                    </svg>
                    <span>Dashboard</span>
                </a>
            </li> </router-link>
            <router-link :to="'/user/management'">    <li class="side-nav__item">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../../../img/sprite.svg#icon-users"></use>
                    </svg>
                    <span>Management</span>
                </a>
            </li></router-link>
            <router-link :to="'/user/permissions'">
            <li class="side-nav__item">
                <a href="#" class="side-nav__link">
                    <svg class="side-nav__icon">
                        <use xlink:href="../../../img/sprite.svg#icon-cog"></use>
                    </svg>
                    <span>Permissions</span>
                </a>
            </li>
            </router-link>
        </ul>
        <div class="legal">
            &copy; 2022. by Jonas Schmedtmann. All right reserved.
        </div>
    </nav>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style scoped lang="scss">
.sidebar {
    background-color: var(--color-grey-dark-1);

    flex: 0 0 18%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
    text-decoration: none;

    &__item {
        background-color: var(--color-grey-dark-1);
        display: flex;
        justify-content: space-between;
        text-decoration: none;
    }
    &__link:link,
    &__link:visited
    {
        color: var(--color-grey-light-4);
        text-decoration: none;
        padding: 1.75rem 3rem;
        display: flex;
        justify-content: space-between;
    }

    &__link:hover {
        color: cornflowerblue;
    }
    &__icon {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 2rem;
        fill: currentColor;
    }
}

.legal {
    font-size: 1.2rem;
    color: var(--color-grey-light-4);
    text-align: center;
    padding: 2.5rem;
}
</style>
