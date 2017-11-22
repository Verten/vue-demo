import Vue from "vue";
import VueRouter from "vue-router";

import organizeList from "../components/organizeList.vue";
import userList from "../components/userList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "organizeList",
    component: organizeList
  },
  {
    path: "/user",
    name: "userList",
    component: userList
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
