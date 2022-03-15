import axios from '../../../axios/axios-instance'

const state = {

}

const actions = {
    loginUser({}, user) {
        return new Promise((resolve) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: user.email,
                    password: user.password
                })
                    .then(response => {
                        if (response.data) {
                            localStorage.setItem('x-token', response.config.headers['X-XSRF-TOKEN'])
                            window.location.replace("/")
                            console.log(response) }
                    }) .catch((error) => {
                    console.log(error.response)
                })

            });
        });
    },
    registerUser({}, user) {
        return new Promise((resolve) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                    .then(response => {
                        if (response.data) {
                            localStorage.setItem('x-token', response.config.headers['X-XSRF-TOKEN'])
                            window.location.replace("/")
                            console.log(response) }
                    }) .catch((error) => {
                    console.log(error.response)
                })

            });
        });
    },
    logout() {
        axios.post('/logout')
            .then(response => {
                localStorage.removeItem('x-token')
                window.location.replace("/user/login")

            })
    }
}

const mutations = {

}

const getters = {

}


export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
