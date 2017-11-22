<template>
  <div id='app'>
    <hello-world :name="name"></hello-world>
  </div>
</template>

<script>
import helloWorld from "./components/helloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      name: "ebinhon"
    };
  },
  components: {
    helloWorld
  }
};
</script>
