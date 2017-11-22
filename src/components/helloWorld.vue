<template>
  <div class="welcome">
      <h3>
          Hello World, {{name}}
      </h3>
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  props: {
    name: String
  }
};
</script>
