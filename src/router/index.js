import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import mobile from '../pages/m_home.vue'
// import About from '../components/about.vue'
Vue.use(VueRouter)

const redirectPath = /Android|webOS|iPhone|BlackBerry|iPad/i.test(navigator.userAgent)?'/m_index':'/p_index';
const routes=[
    {
        path:'/',
        redirect:redirectPath
    },
    {
        path:'/p_index',
        name:'p_index',
        component:Home,
        meta:{type:'pc'}
    },
    {
        path:'/m_index',
        name:'m_index',
        component:mobile,
        meta:{type:'mobile'}
    }
    ]
// if (a)  router=1
// else router=2
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
  })
  
  export default router