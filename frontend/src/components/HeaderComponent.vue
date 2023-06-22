<template>
  <div class="frame-header">
    <img
        src="../assets/лого_белый.svg"
        class="header-logo"
    />
    
    <span class="button" :class="{ selected: isAboutSelcted }" @click="about"><span>о проекте</span></span>
    <span v-if="$store.state.auth.status.loggedIn" class="button" :class="{ selected: isMainSelcted }" @click="main"><span>главная</span></span>
    <span v-if="$store.state.auth.status.loggedIn" class="button" :class="{ selected: isAchievementsSelcted }" @click="achievements"><span>достижения</span></span>
    <span v-if="$store.state.auth.status.loggedIn" class="button" @click="logout"><span>выйти</span></span>
    <span v-if="!$store.state.auth.status.loggedIn" class="button" @click="$router.push('/login')"><span>авторизоваться</span></span>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        // Call your logout action from the auth module
        this.$store.dispatch('auth/logout')
          .then(() => {
            // Redirect the user to the login page or any other desired page
            this.$router.push('/login');
          })
          .catch((error) => {
            console.log(error);
          });
      },
      about() {
        this.$router.push('/');
      },
      main() {
        this.$router.push('/MainTasks');
      },
      achievements() {
        this.$router.push('/Achievements');
      },
      
    },
    computed: {
      isAboutSelcted() {
        return this.$router.currentRoute.value.name === 'main';
      },
      isMainSelcted() {
        return this.$router.currentRoute.value.name === 'mainTasks';
      },
      isAchievementsSelcted() {
        return this.$router.currentRoute.value.name === 'achievements';
      },
    },
  };
</script>


<style scoped>
.button{
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 24px;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  cursor: pointer;
  margin-right: 80px;
}
.button.selected {
  text-decoration: underline;
}
.button.selected:hover{
  color: rgba(255, 255, 255, 1);
  cursor: default;
}

.button:hover{
  color: rgb(214, 214, 214);
}

.frame-header {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row; /* Add this line */
  justify-content: flex-end; /* Add this line */
  align-items: center; /* Add this line */
  background-color: #141414;
}
.header-logo {
  top: 1vh;
  left: 2.45%;
  width: 28.3%;
  height: 10vh;
  position: absolute;
}

</style>