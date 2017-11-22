<template>
  <section class="list-view">
      <h3>this is emojis list view</h3>
      <router-link :to="'/'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
export default {
  name: "emojisView",
  data() {
    return {
      title: "go to user list view"
    };
  }
};
</script>
