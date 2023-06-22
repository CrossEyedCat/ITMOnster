<template>
  <div className="frame-container">
    <HeaderComponent />
    <div style="width: 88%;">
      <img style="display: inline-block;" src="../assets/главнаязадания.svg"/>
  </div>
    <MissionsComponent />
    
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent"; // Import the header component
import MissionsComponent from "@/components/MissionsComponent.vue"

export default {
  name: 'MainTasks',
  props: {},
  data() {
    return {
      rawpyt2: ' ',
    }
  },
  components: {
    HeaderComponent, // Register the header component
    MissionsComponent,
  },
}
</script>

<style scoped>
.frame-container {
  background-color: #151212;
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.frame-frame {
  width: 100%;
  height: 2100px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}

.frame-background1 {
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 2100px;
  position: absolute;
  z-index: -3;
}

.frame-frame01 {
  top: 336.4662780761719px;
  left: 77.70166015625px;
  width: 795.374755859375px;
  height: 457.5000305175781px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.frame-Rectangle32 {
  top: 0px;
  left: 0px;
  width: 795px;
  height: 70px;
  position: absolute;
}

.frame-IMAGE32 {
  top: 0px;
  left: 0px;
  width: 349px;
  height: 70px;
  position: absolute;
}

.frame-Rectangle33 {
  top: 77.5px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-Rectangle39 {
  top: 232.50003051757812px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-Rectangle40 {
  top: 310.0000305175781px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-Rectangle41 {
  top: 387.5000305175781px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-IMAGE33 {
  top: 77.5px;
  left: 0px;
  width: 542px;
  height: 70px;
  position: absolute;
}

.frame-IMAGE35 {
  top: 232.50003051757812px;
  left: 0px;
  width: 291px;
  height: 70px;
  position: absolute;
}

.frame-IMAGE36 {
  top: 310.0000305175781px;
  left: 0px;
  width: 174px;
  height: 70px;
  position: absolute;
}

.frame-Rectangle34 {
  top: 155.00003051757812px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-IMAGE34 {
  top: 155px;
  left: 0px;
  width: 705px;
  height: 70px;
  position: absolute;
}

.frame-text {
  top: 26.53619384765625px;
  left: 259.065673828125px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text01 {
  color: rgba(255, 255, 255, 1);
}

.frame-text03 {
  top: 102.72726440429688px;
  left: 260.065673828125px;
  color: rgba(255, 255, 255, 1);
  width: 187px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text05 {
  top: 257.727294921875px;
  left: 260.065673828125px;
  color: rgba(255, 255, 255, 1);
  width: 187px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text06 {
  color: rgba(255, 255, 255, 1);
}

.frame-text08 {
  top: 335.227294921875px;
  left: 260.06591796875px;
  color: rgba(21, 18, 18, 1);
  width: 187px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text10 {
  top: 412.727294921875px;
  left: 260.06591796875px;
  color: rgba(21, 18, 18, 1);
  width: 187px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text12 {
  top: 180.227294921875px;
  left: 259.065673828125px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame02 {
  top: 162.5px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text14 {
  top: 17.5px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame03 {
  top: 85px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text16 {
  top: 17.5px;
  left: 16px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame04 {
  top: 7.5px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text18 {
  top: 19.03619384765625px;
  left: 14.5px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame05 {
  top: 240.227294921875px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text20 {
  top: 17.5px;
  left: 14.5px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame06 {
  top: 317.7273254394531px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text22 {
  top: 17.5px;
  left: 9px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame07 {
  top: 395.2273254394531px;
  left: 614.68115234375px;
  width: 80px;
  height: 55px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text24 {
  top: 17.5px;
  left: 21.5px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-vector {
  top: 22.003387451171875px;
  left: 1761.6279296875px;
  width: 80px;
  height: 80px;
  position: absolute;
}

.frame-Rectangle60 {
  top: 75.50337982177734px;
  left: 1349.1279296875px;
  width: 50px;
  height: 2px;
  position: absolute;
}

.frame-text26 {
  top: 47.503379821777344px;
  left: 1323.6279296875px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text28 {
  top: 47.503379821777344px;
  left: 1514.6279296875px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame08 {
  top: 0px;
  left: 68.2110595703125px;
  width: 493.3096923828125px;
  height: 102.00338745117188px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.frame-logoosnovnoyrusskiybelyy1 {
  top: 11.996620178222656px;
  left: 0px;
  width: 228px;
  height: 90px;
  position: absolute;
}

.frame-text30 {
  left: 231.3096923828125px;
  color: rgba(255, 255, 255, 1);
  width: 262px;
  height: auto;
  position: absolute;
  font-size: 40px;

  text-align: center;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: 150px;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text31 {
  color: rgba(255, 255, 255, 1);
}

.frame-frame09 {
  top: 336.46630859375px;
  left: 791.343017578125px;
  width: 1050.28515625px;
  height: 633.2030639648438px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-Rectangle42 {
  top: 22.49981689453125px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-Rectangle46 {
  top: 124.81582641601562px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-Rectangle47 {
  top: 227.1318359375px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-Rectangle48 {
  top: 329.44775390625px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-Rectangle49 {
  top: 431.76373291015625px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-Rectangle50 {
  top: 534.0797119140625px;
  left: 857.122314453125px;
  width: 80px;
  height: 55px;
  position: absolute;
  border-radius: 40px;
}

.frame-text33 {
  top: 42.499969482421875px;
  left: 889.622314453125px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text34 {
  top: 142.31591796875px;
  left: 889.622314453125px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text35 {
  top: 244.6318359375px;
  left: 889.622314453125px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text36 {
  top: 346.94775390625px;
  left: 889.622314453125px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text37 {
  top: 449.26373291015625px;
  left: 889.622314453125px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text38 {
  top: 551.5797119140625px;
  left: 889.622314453125px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text39 {
  top: 24.999969482421875px;
  left: 90.2919921875px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text40 {
  top: 127.31582641601562px;
  left: 90.0146484375px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text41 {
  top: 229.6317138671875px;
  left: 90.0146484375px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text42 {
  top: 331.94775390625px;
  left: 90.0146484375px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text43 {
  top: 434.263671875px;
  left: 90.0146484375px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text44 {
  top: 533.4716796875px;
  left: 90.0146484375px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text45 {
  top: 24.999969482421875px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text47 {
  top: 127.31582641601562px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text49 {
  top: 229.6318359375px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text51 {
  top: 331.94775390625px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text53 {
  top: 434.263671875px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text55 {
  top: 533.4716796875px;
  left: 139.61767578125px;
  color: rgba(21, 18, 18, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-Rectangle401 {
  top: 62.499969482421875px;
  left: 139.61767578125px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-Rectangle411 {
  top: 164.81582641601562px;
  left: 139.61767578125px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-Rectangle421 {
  top: 267.13177490234375px;
  left: 139.61767578125px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-Rectangle43 {
  top: 369.44775390625px;
  left: 139.617919921875px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-Rectangle44 {
  top: 471.763671875px;
  left: 139.61767578125px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-Rectangle45 {
  top: 574.0797119140625px;
  left: 139.61767578125px;
  width: 771px;
  height: 15px;
  position: absolute;
}

.frame-frame10 {
  top: 1194.3699951171875px;
  left: 77.90869140625px;
  width: 1764.1826171875px;
  height: 563.269287109375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}

.frame-frame1 {
  top: 0px;
  left: 0px;
  width: 434px;
  height: 563.269287109375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text57 {
  top: 489.88916015625px;
  left: 46.609375px;
  color: rgba(21, 18, 18, 1);
  width: 297px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-Rectangle59 {
  top: 0px;
  left: 0px;
  width: 434px;
  height: 434px;
  position: absolute;
}

.frame-text59 {
  top: 458.845947265625px;
  left: 46.609375px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame2 {
  top: 0px;
  left: 443.46337890625px;
  width: 434px;
  height: 563.269287109375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text61 {
  top: 489.88916015625px;
  left: 46.609375px;
  color: rgba(21, 18, 18, 1);
  width: 297px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-Rectangle591 {
  top: 0px;
  left: 0px;
  width: 434px;
  height: 434px;
  position: absolute;
}

.frame-text63 {
  top: 458.845947265625px;
  left: 46.609375px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame3 {
  top: 0px;
  left: 886.926513671875px;
  width: 434px;
  height: 563.269287109375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text65 {
  top: 489.88916015625px;
  left: 46.609375px;
  color: rgba(21, 18, 18, 1);
  width: 297px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-Rectangle592 {
  top: 0px;
  left: 0px;
  width: 434px;
  height: 434px;
  position: absolute;
}

.frame-text67 {
  top: 458.845947265625px;
  left: 46.609375px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-frame4 {
  top: 0px;
  left: 1330.1826171875px;
  width: 434px;
  height: 563.269287109375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  background-color: rgba(255, 255, 255, 1);
}

.frame-text69 {
  top: 489.88916015625px;
  left: 46.609375px;
  color: rgba(21, 18, 18, 1);
  width: 297px;
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-Rectangle593 {
  top: 0px;
  left: 0px;
  width: 434px;
  height: 434px;
  position: absolute;
}

.frame-text71 {
  top: 458.845947265625px;
  left: 46.609375px;
  color: rgba(51, 51, 51, 1);
  height: auto;
  position: absolute;
  font-size: 20px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text73 {
  top: 197px;
  left: 97px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 40px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text75 {
  top: 197px;
  left: 540.46337890625px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 40px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text77 {
  top: 197px;
  left: 983.822998046875px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 40px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text79 {
  top: 197px;
  left: 1427.1826171875px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 40px;

  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text81 {
  top: 1119.933349609375px;
  left: 75.90869140625px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: 100px;
  font-stretch: normal;
  text-decoration: none;
}

.frame-text83 {
  top: 259.96612548828125px;
  left: 1542.46533203125px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: ALS Gorizont;
  font-weight: 800;
  line-height: 100px;
  font-stretch: normal;
  text-decoration: none;
}

.frame-vector-stroke {
  top: 1797.6392822265625px;
  left: 980px;
  width: 15px;
  height: 40px;
  position: absolute;
}
</style>