<template>


    <main class="main-part">

    <my-window v-if="isPopupVisible" @close="closePopup">
        <ul>
            <li>
                <form>
                    <my-input type="text" placeholder="username" v-model="user.name" />
                    <my-input type="text" placeholder="email address" v-model="user.email" />


                    <my-input type="password" placeholder="password" v-model="user.password" />
                    <my-input type="password" placeholder="password confirmation" v-model="user.password_confirmation" />



                    <h2 style="color: #cccccc; margin: 10px 10px">Роль</h2>
                    <select v-model="user.role.name" class="select">
                        <option disabled value="">Выберите роль</option>
                        <option v-for="role in getRoles" :key="role.id">
                            {{ role.name }}
                        </option>
                    </select>


                </form>
            </li>
            <li>
                <div class="footer">
                    <my-button @click="addUser">Add</my-button>

                    <my-button >Close</my-button>
                    <!--                <my-button @click="close">Close</my-button>-->
                </div>
            </li>
        </ul>
    </my-window>


        <table>

            <thead>

            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action 1</th>
                <th>Action 2</th>
                <th>  <my-button class="btn" @click="popup">Add</my-button></th>

            </tr>

            </thead>
            <tbody>
            <tr v-for="user in getUsers" :key="user.id" >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td v-if="user.role" >{{ user.role.name }}</td>
                <td v-else>N/A</td>
                <td>
                    <router-link
                        :to="{ name: 'UserEdit', params: { id: user.id }}">
                        <my-button class="status status-edit">  Edit </my-button>
                    </router-link>
                </td>
                <td>
                    <my-button class="status status-delete" @click="deleteUser(user.id)"> Delete </my-button>
                </td>
                <td></td>
            </tr>
            </tbody>
    </table>
    </main>



</template>

<script>

import axios from "../../../axios/axios-instance";
export default {
    name: "Users",
    components: {

    },
    data() {
        return {
            isPopupVisible: false,
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            role: {
                name: ''
                }
            }
        }
    },
    created() {
        this.$store.dispatch('users/getUsers')
        this.$store.dispatch('users/getRoles')
    },
    methods: {
        popup() {
            this.isPopupVisible = true
        },
        closePopup() {
            this.isPopupVisible = false
        },
        addUser() {
            this.$store.dispatch('users/addUser', this.user)
        },
        deleteUser(id) {
            axios.delete('/api/users/' + id).then(res =>{
                this.$store.dispatch('users/getUsers')
            })
        }
    },
    computed: {
        getUsers: {
            get() {
                return this.$store.state.users.userList
            }
        },
        getRoles: {
            get() {
                return this.$store.state.users.roleList
            }
        }
    }

}
</script>

<style scoped lang="scss">

$clr-pending: #fff0c2;
$clr-pending-font: #a68b00;
$clr-unpaid: #ffcdd2;
$clr-unpaid-font: #c62828;
$clr-paid: #c8e6c9;
$clr-paid-font: #388e3c;
$clr-gray150: #f4f6fb;
$radius: 0.2rem;

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Mukta, sans-serif;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;

    font-size: 0.9rem;

}

ul {
    list-style-type: none;
}

table {
    margin: 15rem 10rem;
    border-collapse: collapse;
    box-shadow: var(--shadow-dark);
    background-color: white;
    text-align: left;
    overflow: hidden;
    border: #1a202c;

    thead {
        box-shadow: var(--shadow-dark);
    }

    th {
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1.7rem;
        font-weight: 900;
    }

    td {
        padding: 1rem 2rem;
    }


    .input {
        margin: 10px 10px ;
    }

    .btn {
        padding: 10px 10px;
        float: right;
    }


    .status {


        padding: 0.2rem 1rem;
        text-align: center;


        &-edit {
            background-color: $clr-paid;
            color: $clr-paid-font;
        }

        &-delete {
            background-color: $clr-unpaid;
            color: $clr-unpaid-font;
        }
    }

    .amount {
        text-align: right;
    }
    tr:nth-child(even) {
        background-color: $clr-gray150;

    }

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

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
