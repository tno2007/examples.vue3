import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import Switchboard from "../components/Switchboard.vue";
import NotFound from "../components/NotFound.vue";
import { useAuthStore } from "../stores/useAuthStore";

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 1. Define route components.
// These can be imported from other files

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/switchboard", component: Switchboard },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from /*next*/) => {
  // redirect to login page if not logged in and trying to access a restricted

  //console.log(to);

  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.token) {
    auth.returnUrl = to.fullPath;
    return "/";
  }
});
