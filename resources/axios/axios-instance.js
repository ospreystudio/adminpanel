import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_URL_API,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
})

instance.interceptors.response.use({}, error => {
    console.log(error.response)
    if(error.response.status ===401 || error.response.status ===419) {
        const token = localStorage.getItem('x-token')
            if (token) {
                localStorage.removeItem('x-token')
            }
            window.location.replace('/user/login')
    }
    // else if (error.response.status ===422 || error.response.status ===500) {
    //     console.log(error.response.data)
    // }
})



export default instance
