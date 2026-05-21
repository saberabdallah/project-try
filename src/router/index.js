import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import TodoView from "../views/TodoView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },

    {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/Todo",
    name: "TodoView",
    component: TodoView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
