import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import MainTasksView from "@/views/MainTasksView";

const routes = [
  {
    path: '/login',
    name:'login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    name:'main',
    component:  MainView,
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name:'register',
    component: RegisterView,
    meta: { requiresAuth: false },
  },
  {
    path: '/MainTasks',
    name: 'mainTasks',
    component: MainTasksView,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'login' }); // Redirect to login page if not logged in
  } else if ((to.name === 'login' || to.name === 'register') && loggedIn) {
    next({ name: 'main' }); // Redirect to home page if already logged in and trying to access login/register page
  } else {
    next(); // Proceed with the navigation
  }
});


export default router;
