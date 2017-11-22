import Vue from "vue";
import VueRouter from "vue-router";

import emojisList from "../components/emojisList.vue";
import userList from "../components/userList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "userList",
    component: userList
  },
  {
    path: "/emojis",
    name: "emojisList",
    component: emojisList
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
