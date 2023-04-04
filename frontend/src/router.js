import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("./views/Users.vue"),
  },
  {
    path: "/users/add",
    name: "AddUser",
    component: () => import("./views/AddUser.vue"),
  },
  {
    path: "/users/edit/:id",
    name: "EditUser",
    component: () => import("./views/EditUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
