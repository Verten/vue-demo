<template>
  <section class="list-view">
      <h3>this is user list view</h3>
      <router-link :to="'/emojis'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
export default {
  name: "userView",
  data(){
      return {
          title: 'to go emojis list view'
      }
  }
};
</script>
