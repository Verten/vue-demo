<template>
  <section class="list-view">
      <h3>this is user list view</h3>
      <router-link :to="'/'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
export default {
  name: "userView",
  data(){
      return {
          title: 'to go organize list view'
      }
  }
};
</script>
