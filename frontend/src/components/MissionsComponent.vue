<template>
     <div class="missions-container">
       <div class="category-list">
         <ul>
           <li v-for="category in categories" class="row" @click="showMissions(category)">
            <div class="progress-bar">
                <div style="position: relative;"><p style="position: absolute;left:0; right: 0; margin: 25px auto; color:white">{{ category }}</p></div>
                <div class="progress" ></div>
            </div>
           </li>
         </ul>
       </div>
       <div class="mission-list">
         <ul>
           <li v-for="mission in missions" class="row">
            <ProgressBar :total="mission.total" :current="mission.amount" :title="mission.title" :description="mission.description" />
        </li>
         </ul>
       </div>
     </div>
</template>
  
<script>
    import api from "@/services/api";
    import ProgressBar from '@/components/UI/ProgressBar.vue';

    export default {
     data() {
       return {
         categories: ["BE_FIT","BE_HEALTHY", "BE_OPEN","BE_FRIENDLY","BE_ECO","BE_PRO"],
         missionsMap: null,
         missions: []
       };
     },
     mounted() {
       api.get('/api/missions')
         .then(response => {
           this.missionsMap = response.data;
         })
         .catch(error => {
           console.error(error);
         });
     },
     methods: {
       showMissions(category) {
         // Filter missions based on the selected category
         this.missions = this.missionsMap[category];
       },
     },
    //  computed:{
    //     getCategoryP(c){
    //         let total = 0;
    //        let amount = 0;
    //        let missionsArray = this.missionsMap && this.missionsMap[category] || [];
    //         for (let i = 0; i < missionsArray.length; i++) {
    //             if(this.missionsMap[c][i].completed == true){
    //                 amount++;
    //             }
    //             total++;
    //         }

    //         return `${(amount / total) * 100}%`
    //     }
    //  },
     components:{
        ProgressBar,
     }
   };
</script>

<style scoped>
    .missions-container{
        background-color: black;
        width: 100%;
        padding: 70px;
    }
   .category-list {
    padding: 0;
        float: left;
        width: 40%;
   }

   .mission-list {
    padding: 0;
    padding-left: 7.5px;
     float: right;
     width: 60%;
   }
   .row{
    width: 100%;
    background-color: white;
    margin:0;
}
    .category-list .row{
       margin-bottom: 7.5px;
        height: 70px;
   }
   .mission-list .row{
        height: 82px;
        padding-left: 90px;
        
   }
    ul {
        list-style: none;
        padding: 0;
    }
    ul li {
        padding: 0;
        margin: 0;
    }
    .progress-bar {
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #D9D9D9;
  }
  
  .progress {
    height: 100%;
    background-color: #EE215B;
    border-radius: 0;
  }

</style>