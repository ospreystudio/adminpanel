<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style scoped lang="scss">

.btn {
    background-color: var(--color-primary-light);
    color: #fff;
    margin: 20px 0;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background-color: var(--color-primary-dark);
    }
}



</style>
