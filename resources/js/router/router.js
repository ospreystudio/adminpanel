import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/layout/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home

    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
