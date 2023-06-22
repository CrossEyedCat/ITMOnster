<template>
    <div>
        <p style="margin-bottom: 0;">{{ description }}</p>
        <div style="float: right;">{{ current }} / {{ total }}</div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      total: {
        type: Number,
        required: true,
      },
      current: {
        type: Number,
        required: true,
      },
      title:{
        type: String
      },
      description:{
        type: String,
      }
    },
    computed: {
      progressWidth() {
        return `${(this.current / this.total) * 100}%`;
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    width: 100%;
    height: 15px;
    background-color: #D9D9D9;
  }
  
  .progress {
    height: 100%;
    background-color: #EE215B;
  }
  </style>