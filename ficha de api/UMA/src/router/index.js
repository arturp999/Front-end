import Vue from 'vue'
import VueRouter from 'vue-router'


// Minhas componentes
import Default from '../views/default.vue'
import Contact from '../components/Contact/contact.vue'
import Home from '../components/Home/home.vue'
import Calculator from '../components/Calculator/calculator.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'defaultPage',
        component: Default
    },
    {
        path: '/Contact',
        name: 'contactPage',
        component: Contact
    },
    {
        path: '/Home',
        name: 'homePage',
        component: Home
    },
    {
        path: '/Calculator',
        name: 'calculatorPage',
        component: Calculator
    }
]

const router = new VueRouter({
    routes
})

export default router