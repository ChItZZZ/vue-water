const App = r => require.ensure([], () => r(require('../App.vue')), 'App')
const Register = r => require.ensure([], () => r(require('../components/Register.vue')), 'Register')

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
        path:'*',
        component:App
    }
]