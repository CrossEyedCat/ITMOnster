<template>
  <router-view />
</template>

<script>
import EventBus from "@/common/eventBus";
export default {
  components: {
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logout();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
  },
};
</script>

<style>
</style>
