<template>
  <div class="frame-container">
    <div class="frame-frame">
      <img
          src="../assets/background1912-u0d-2000w.png"
          alt="background1912"
          class="frame-background1"
      />
      <div class="frame-header">
        <span class="frame-text" @click="$router.push('/register')"><span>авторизоваться</span></span>
        <span class="frame-text2"><span>о проекте</span></span>
      </div>
      <div class="frame-frame1">
          <span class="frame-text7" @click="$router.push('/register')"><span>вход / регистрация</span></span>
      </div>
      <img
          src="../assets/image29310-qutt-600h.png"
          alt="image29310"
          class="frame-image2"
      />
      <img
          src="../assets/image39312-agdh-200h.png"
          alt="image39312"
          class="frame-image3"
      />
      <img
          src="../assets/image49314-75jl-600h.png"
          alt="image49314"
          class="frame-image4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {},
  data() {
    return {
      raw8cvu: ' ',
    }
  },
}
</script>

<style scoped>
.frame-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame-frame {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame-background1 {
  top: 0px;
  left: 0px;
  width: 100%;
  position:absolute;
  height: 170vh;
  color:#141414;
}
.frame-header {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2vh;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: #141414;
}
.frame-text {
  top: 3vh;
  left: 80%;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 3vh;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text2 {
  top: 3vh;
  left: 70%;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 3vh;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-frame1 {
  top: 90vh;
  left: 35%;
  width: 30%;
  height: 90px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}
.frame-text7 {
  top: 30.5px;
  left: 28%;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 24px;

  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-image2 {
  top: 20vh;
  left: 13%;
  width: 73%;
  height: 527px;
  position: absolute;
}
.frame-image3 {
  top: 1vh;
  left: 2.45%;
  width: 28.3%;
  height: 10vh;
  position: absolute;
}
.frame-image4 {
  top: 120vh;
  left: 0.6%;
  width: 98.8%;
  height: 40vh;
  position: absolute;
}
</style>