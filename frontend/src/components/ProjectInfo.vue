<template>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  background-repeat: repeat-x;
  background-blend-mode: revert;
  padding: 15px 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.corner {
  width: 300px;
  height: 80px;
}

button {
  margin-top: 0 !important;
}

.project-name {
  text-align: center;
  cursor: pointer;
  margin-top: -50px !important;
}

.variant {
  text-align: right;
}
</style>
