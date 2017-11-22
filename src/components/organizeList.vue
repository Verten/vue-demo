<template>
  <section class="list-view">
      <h3>this is organize list view</h3>
      <router-link :to="'/user'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
export default {
  name: "organizeView",
  data() {
    return {
      title: "go to user list view"
    };
  }
};
</script>
