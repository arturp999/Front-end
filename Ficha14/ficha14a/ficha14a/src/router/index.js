import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactos from '../views/Contactos.vue'
import erro from '../views/erro.vue'
import contacto from '../views/contacto.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contactos',
        component: Contactos
    },
    {
        path: '/contactos/:id',
        component: contacto
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '*',
        component: erro
    }
]

const router = new VueRouter({
    routes
})

export default router