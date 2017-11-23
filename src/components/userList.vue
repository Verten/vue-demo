<template>
  <section class="list-view">
      <h3>this is user list view</h3>
      <div v-if="processing">Loading...</div>
      <div v-else>
          <ul>
              <li v-for="user in users" :key="user.id" >
                  {{user.login}}
              </li>
          </ul>
      </div>
      <router-link :to="'/emojis'" class="item-title">
          {{ title }}
      </router-link>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Don’t use arrow functions on an options property or callback
export default {
  name: "userView",
  data() {
    return {
      title: "to go emojis list view"
    };
  },
  computed: {
    ...mapGetters(["getUsers", "isProcessing"]),
    users() {
      return this.getUsers;
    },
    processing() {
      return this.isProcessing;
    }
  },
  methods: {
    ...mapActions({
      fetchUsers: "fetchUsers"
    })
  },
  created() {
    console.info(this.$route);
    console.info(this.$store);
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>
