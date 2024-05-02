import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import  Home from '../Layouts/Layout.vue';
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },

    {
        path: '/home',//导航栏界面
        name: 'Home',
        component: Home,
        meta:{requireAuth:true},
        redirect: '/home/Weather', // 设置重定向
        children:[//地图界面
            {
                path:'/home/Weather',
                name:'Weather',
                component:()=>import('../Dashboard/Weather.vue')
            },
            {
                path:'/home/Agri',
                name:'Agri',
                component:()=>import('../Dashboard/Agri.vue')

            },
            {
                path:'/home/HeatMap',
                name:'HeatMap',
                component:()=>import('../MapPreview/HeatMap.vue')

            },
            {
                path:'/home/Maps/CommonMap',
                name:'CommonMap',
                component:()=>import('../MapPreview/CommonMap.vue')
            },
            {
                path:'/home/Maps/fish-pond',
                name:'fish-pond',
                component:()=>import('../MonitoringView/agricultural_area/fish-pond.vue')
            },
            { path:'/home/Maps/wheat-field',
                name:'wheat-field',
                component:()=>import('../MonitoringView/agricultural_area/wheat-field.vue')
            },
            { path:'/home/Maps/orchard',
                name:'orchard',
                component:()=>import('../MonitoringView/agricultural_area/orchard.vue')
            },
            { path:'/home/Maps/entrance',
                name:'entrance',
                component:()=>import('../MonitoringView/scenic_spot/entrance.vue')
            },
            { path:'/home/Maps/exit',
                name:'exit',
                component:()=>import('../MonitoringView/scenic_spot/exit.vue')
            },

            { path:'/home/Maps/park',
                name:'park',
                component:()=>import('../MonitoringView/scenic_spot/park.vue')
            },
            { path:'/home/Maps/Dayview',
                name:'Dayview',
                component:()=>import('../Dashboard.components/Weathers/Dayview.vue')
            },

            { path:'/home/Maps/agricultural-products-market',
                name:'agricultural-products-market',
                component:()=>import('../MonitoringView/trading-market-area/agricultural-products-market.vue')
            },

            { path:'/home/Maps/textile-market',
                name:'textile-market',
                component:()=>import('../MonitoringView/trading-market-area/textile-market.vue')
            },

        ],

    },


];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
