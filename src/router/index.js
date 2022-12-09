import { createRouter , createWebHashHistory } from "vue-router";
import Home from "./../components/Home.vue"
import Forgot from "./../components/Forgot.vue"
import Login from "./../components/Login.vue"

const routes = [
    {
        path:"/",
        name: 'Home',
        component: Home
    },
    {
        path:"/login",
        name: 'Login',
        component: Login
    },
    {
        path:"/forgot",
        name: 'Forgot',
        component: Forgot
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;