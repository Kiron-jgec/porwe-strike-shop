import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/gallary",
    name: "Gallary",
    component: () => import("../views/Gallary.vue"),
  },
  {
    path: "/order-now",
    name: "OrderNow",
    component: () => import("../views/OrderNow.vue"),
  },
  {
    path: "/thank-you",
    name: "Thankyou",
    component: () => import("../views/Thankyou.vue"),
  },
  { path: "*", redirect: "/error" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // user Scroll contol
  scrollBehavior(to, form, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
