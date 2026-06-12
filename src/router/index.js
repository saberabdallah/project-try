import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import TodoView from "../views/TodoView.vue";
import ShopView from "../views/ShopView.vue";
import ExampleView from "../views/ExapleView.vue";


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
      path: "/Shop",
      name: "Shop",
      component: ShopView,
    },
    {
      path: "/Example",
      name: "Example",
      component: ExampleView,
    },  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
