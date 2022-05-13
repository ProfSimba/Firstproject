import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Master_Detail from "@/views/Master_Detail.vue";
import Master_Detail1 from "@/views/Master_Detail1.vue";
import Master_Detail2 from "@/views/Master_Detail2.vue";
import Grid from "@/views/Grid.vue";
import Grid1 from "@/views/Grid1.vue";
import List from "@/views/List.vue";
import List1 from "@/views/List1.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/List1", component: List1 },
    { path: "/List", component: List },
    { path: "/Grid1", component: Grid1 },
    { path: "/Grid", component: Grid },
    { path: "/Master_Detail2", component: Master_Detail2 },
    { path: "/Master_Detail1", component: Master_Detail1 },
    { path: "/Master_Detail", component: Master_Detail },
    { path: "/", component: Home },

  ]
});
