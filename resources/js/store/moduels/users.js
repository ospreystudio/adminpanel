import axios from '../../../axios/axios-instance'

const state = {
    userList: [],
}

const actions = {
    getUsers(ctx) {
        axios.get('/api/users').then(response => {
            ctx.commit('setUserList', response.data.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });
    },
    addUser({}, user) {
        axios.post('/api/users', {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        }) .then(response => {
            if(response.data) {
                window.location.replace("/user/dashboard")
                console.log(response)
            }
        }).catch((error) => {
            console.log(error.response)
        })
    }
}



const mutations = {
    setUserList(state, payload) {
        state.userList = payload
    }
}

const getters = {
    userList(state) {
        return state.userList
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
