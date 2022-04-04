import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/layout/Home";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import Dashboard from "../views/layout/Dashboard";
import UserEdit from "../views/layout/UserEdit";
import Permissions from "../views/layout/Permissions";
import EditPermissions from "../views/layout/EditPermissions";
import Management from "../views/layout/Management";
import ManagementEdit from "../views/layout/ManagementEdit";


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
        path: '/user/permissions',
        name: 'Permissions',
        component: Permissions

    },
    {
        path: '/user/management',
        name: 'Management',
        component: Management

    },
    {
        path: '/management/:id',
        name: 'ManagementEdit',
        component: ManagementEdit

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
    {
        path: '/user/:id',
        name: 'UserEdit',
        component: UserEdit

    },
    {
        path: '/permissions/:id',
        name: 'EditPermissions',
        component: EditPermissions

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
