<template>
    <div class="user-page">
        <ul>
            <li>
                <form>
                    <h1>Edit Permission</h1>
                    <my-input type="text" placeholder="update permission" v-model="permission.name" />
                    <h2 style="color: #cccccc; margin: 10px 10px">Permission</h2>
                </form>
            </li>
            <li>
                <my-button @click="updatePermissions">Update</my-button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "../../../axios/axios-instance";
export default {
    name: "UserEdit",
    data() {
        return {
            permission: {
                name: "",
                }
            }
    },
    created() {
        this.$store.dispatch('users/getRoles')
    },
    methods: {
        updatePermissions() {
            axios
                .put("/api/permissions/" + this.$route.params.id, {
                    name: this.permission.name,
                })
                .then(res => {
                    this.$router.push({name: "Permissions"});
                });
        },

    },
}
</script>

<style scoped lang="scss">
.user-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    display:flex;
}
.form {
    position: relative;
    z-index: 1;
    background-color: var(--color-grey-dark-1);
    background-size: cover;
    background-position: center;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 0 rgba(0, 0, 0, 0.2);
}
.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form .message {
    margin: 15px;
    color: #b3b3b3;
    font-size: 12px;
}
.form .message a {
    color: #c69963;
    text-decoration: none;
}

li {
    list-style-type: none;
}

select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: #1a202c;
    background-color: #fff;
    background-image: none;
    cursor: pointer;

}
/* Remove IE arrow */
select::-ms-expand {
    display: none;
}
/* Custom Select wrapper */
.select {
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    border-radius: .25em;
    overflow: hidden;
    margin: 10px auto;
}
/* Arrow */
.select::after {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    transition: .25s all ease;
    pointer-events: none;
}
</style>
