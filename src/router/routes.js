const App = r => require.ensure([], () => r(require('../App.vue')), 'App')
const Register = r => require.ensure([], () => r(require('../components/Register.vue')), 'Register')
const Home = r => require.ensure([], () => r(require('../components/Home.vue')), 'Home')

export default [
    {
        path: '/',
        component: App
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'*',
        component:App
    }
]