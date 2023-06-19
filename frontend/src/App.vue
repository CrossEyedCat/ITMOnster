<template>
  <project-info />
  <router-view />
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import EventBus from "@/common/eventBus";
export default {
  components: {
    ProjectInfo,
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
@font-face {
  font-family: "DS_Pixel";
  src: url("./assets/DS Pixel Cyr Regular.ttf");
  font-style: normal;
  font-weight: normal;
}
#app {
  background-image: url("./assets/main_background.png");
  background-repeat: space;
  font-family: DS_Pixel, serif;
  font-size: 1rem;
}
</style>
