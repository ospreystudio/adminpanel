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
