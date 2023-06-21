import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import MainTasksView from "@/views/MainTasksView";
import store from "@/store";

const routes = [
  {
    path: '/login',
    name:'login',
    component: LoginView,
  },
  {
    path: '/',
    name:'main',
    component:  MainView,
  },
  {
    path: '/register',
    name:'register',
    component: RegisterView,
  },
  {
    path: '/MainTasks',
    name: 'mainTasks',
    component: MainTasksView
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});


export default router;
