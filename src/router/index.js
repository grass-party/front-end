import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignInView'
import SignUp from '../components/SignUpView'
import PublishKey from '../components/PublishKeyView'
import Main from '../components/MainView'
import AgendaList from '../components/AgendaListView'
import AgendaCreate from '../components/AgendaCreateView'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Main},
        {path: '/signIn', component: SignIn},
        {path: '/signUp', component: SignUp},
        {path: '/publishKey', component: PublishKey},
        {path: '/create', component: AgendaCreate},
        {path: '/agenda', component: AgendaList},
    ]
});
export default router

