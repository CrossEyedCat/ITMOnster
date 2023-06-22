<template>
    <div class="frame-container">
      <div class="frame-frame">
        <img
            src="../assets/background.png"
            alt="background1912"
            class="frame-background"
        />
  
        <HeaderComponent />
        
        <img style="margin: 30px 50px" src="../assets/achievements.svg" />
        <div style="display: flex; align-items: center; flex-direction: column;" class="profile">
            <img style ="display: inline-block; width: 20%"
            src="../assets/Vector1022-sjqq.svg"
             />
            <p style="font-size: xx-large; color: white">{{user &&  user.username }}</p>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center;">
          <!-- <ProgressBar :my_title=op :my_percent=fetchAchievements.percent /> -->
        </div>

        <div>
            <div>

            </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import api from "@/services/api";
  import HeaderComponent from "@/components/HeaderComponent"; // Import the header component
  import ProgressBar from "@/components/UI/ProgressBar.vue";

  export default {
    name: 'Frame',
    props: {},
    data() {
      return {
        op:'Общий прогресс',
        user: null
      }
    },
    mounted() {
        this.getUserData();
        api.get('/api/achievements')
         .then(response => {
           this.achievements = response.data;
         })
         .catch(error => {
           console.error(error);
         });
    },
    methods: {
        getUserData() {
            const userData = localStorage.getItem("user");
            if (userData) {
                this.user = JSON.parse(userData);
            }
        },
    },
    computed: {
      fetchAchievements(){
        return {percent: totalP, achievements: achievements}
      }
    },
    components: {
      HeaderComponent, // Register the header component
      ProgressBar,
    },
  }
  </script>
<style scoped>
.frame-background {
  top: 0px;
  left: 0px;
  width: 100%;
  
  position:absolute;
  height: 250vh;
  color:#151212;
  z-index: -3;
}
</style>