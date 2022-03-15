import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/layout/Home";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import Dashboard from "../views/layout/Dashboard";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home

    },
    {
        path: '/user/dashboard',
        name: 'Dashboard',
        component: Dashboard

    },
    {
        path: '/user/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/user/register',
        name: 'Registration',
        component: Registration

    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-token')

    if(!token) {
        if (to.name === 'Login' || to.name === 'Registration') {
            return next()
        } else {
            return next ({
                name: 'Login'
            })
        }
    }
    if (to.name === 'Login' || to.name === 'Registration' && token) {
        return next({
            name: 'Home'
        })
    }
    next()
})

export default router
