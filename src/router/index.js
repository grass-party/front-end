import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignInView'
import SignUp from '../components/SignUpView'
import GenerateKey from '../components/GenerateKeyView'
import Main from '../components/MainView'
import AgendaList from '../components/AgendaListView'
import AgendaDetail from '../components/AgendaDetail'
import AgendaCreate from '../components/AgendaCreateView'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.URL_BASE,
  routes: [
    {path: '/', component: Main},
    {path: '/signIn', component: SignIn},
    {path: '/signUp', component: SignUp},
    {path: '/generateKey', component: GenerateKey},
    {path: '/create', component: AgendaCreate},
    {path: '/agendas', component: AgendaList},
    {path: '/agendas/:id', component: AgendaDetail},
  ]
});
export default router

