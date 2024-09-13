import {createRouter} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', name:'home',component: HomeComponent, meta: {title: 'Home'} },
        { path: '/about', name:'about',component: AboutComponent, meta: {title: 'About'} },
        { path: '/', redirect: '/home' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;