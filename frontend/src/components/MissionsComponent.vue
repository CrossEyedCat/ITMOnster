<template>
     <div class="missions-container">
       <div class="category-list">
         <ul>
           <li v-for="category in categories" class="row" @click="showMissions(category)">
            <ProgressBar :my_title=category :my_percent=categoryPercentages[category]></ProgressBar>
           </li>
         </ul>
       </div>
       <div class="mission-list">
         <ul>
           <li v-for="mission in missions" class="row">
            <ProgressBarMini :total="mission.total" :current="mission.amount" :title="mission.title" :description="mission.description" />
        </li>
         </ul>
       </div>
     </div>
</template>
  
<script>
    import api from "@/services/api";
    import ProgressBar from '@/components/UI/ProgressBar.vue';
    import ProgressBarMini from '@/components/UI/ProgressBarMini.vue';

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
     computed: {
    categoryPercentages() {
      if (!this.missionsMap) {
        return {};
      }

      const percentages = {};
      for (const category of this.categories) {
        let total = 0;
        let amount = 0;
        const missionsArray = this.missionsMap[category] || [];

        for (let i = 0; i < missionsArray.length; i++) {
          const mission = missionsArray[i];
            amount += mission.amount;
          total += mission.total;
        }

        if (total == 0) {
          percentages[category] = "0%";
        } else {
          percentages[category] = `${(amount / total) * 100}%`;
        }
      }

      return percentages;
    }
  },
     components:{
        ProgressBar,
        ProgressBarMini,
     }
   };
</script>

<style scoped>
    .missions-container{
      background-color: #151212;
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

</style>