import axios from '../../../axios/axios-instance'

const state = {
    userList: [],
    roleList: [],
    permissionsList: []
}

const actions = {
    getUsers(ctx) {
        axios.get('/api/users').then(response => {
            ctx.commit('setUserList', response.data.data)
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
    },
    addUser({}, user) {
        axios.post('/api/users', {
            name: user.name,
            email: user.email,
            role: user.role.name,
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
    },
    addPermission({}, permission) {
        axios.post('/api/permissions', {
            name: permission.name,
        }) .then(response => {
            if(response.data) {
                window.location.replace("/user/permissions")
                console.log(response)
            }
        }).catch((error) => {
            console.log(error.response)
        })
    },
    addRole({}, role) {
        axios.post('/api/roles', {
            name: role.name,
        }) .then(response => {
            if(response.data) {
                window.location.replace("/user/management")
                console.log(response)
            }
        }).catch((error) => {
            console.log(error.response)
        })
    },
    getRoles(ctx) {
        axios.get('/api/roles').then(response => {
            ctx.commit('setRoleList', response.data.data)
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
    },
    getPermissions(ctx) {
        axios.get('/api/permissions').then(response => {
            ctx.commit('setPermissionsList', response.data.data)
            console.log(response)
        }).catch(error => {
            console.log(error)
        });
    },
}



const mutations = {
    setUserList(state, payload) {
        state.userList = payload
    },
    setRoleList(state, payload) {
        state.roleList = payload
    },
    setPermissionsList(state, payload) {
        state.permissionsList = payload
    }
}

const getters = {
    userList(state) {
        return state.userList
    },
    roleList(state) {
        return state.roleList
    },
    permissionsList(state) {
        return state.permissionsList
    }

}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
