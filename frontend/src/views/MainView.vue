<template>
  <div class="frame-container">
    <div class="frame-frame">
      <img
          src="../assets/background.png"
          alt="background1912"
          class="frame-background"
      />

      <HeaderComponent />

      <!-- <div class="frame-frame1">
          <span class="button_register_underlogo" @click="$router.push('/register')"><span>вход / регистрация</span></span>
      </div> -->

      <div v-if="!$store.state.auth.status.loggedIn" class="button_underlogo_register">
        <a class="button" @click="$router.push('/register')">вход / регистрация</a>
        <!-- <button type="button"> вход / регистрация </button> -->
      </div>
      <img
          src="../assets/main_logo.svg"
          class="main_logo"
      />

      <span class="text_underlogo">
        Введение в корпоративную культуру be ITMO с помощью интерактивного курса с ачивками и системой <span class="text_underlogo_one_red_word"> уровней </span>
      </span>
      <!-- <span class="text_underlogo_one_red_word"> уровней </span> -->

      <img
          src="../assets/о_проекте.svg"
          class="about_project"
      />

      <img
          src="../assets/red_element.svg"
          class="red_element"
      />
      <span class="about_text_1">Сервис помогает новичку не запутаться в сложной системе предлагая ознакомительную экскурсию в be ITMO.</span>
      <span class="about_text_2"> Так же элемент геймификации позволяет удержать пользователя активным. Система рекомендаций может позволить каждому открыть для себя что-то новое</span>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent"; // Import the header component

export default {
  name: 'Frame',
  props: {},
  data() {
    return {
      raw8cvu: ' ',
    }
  },
  components: {
    HeaderComponent, // Register the header component
  },
}
</script>

<style scoped>

/* .button_underlogo_register {
  position: relative;
	border: 3px solid rgba(28, 28, 28, 1);
	outline: none;
	display: inline-block;
	overflow: hidden;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 16px;
	padding: 12px 16px;
	color: #282828;
	background: transparent;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	margin: 20px;
} */

.button {
	position: absolute;
  width: 500px;
  height: 90px;
  left: 710px;
  top: 952.95px;

  background: #FFFFFF;
  border-radius: 50px;
	
	outline: none;
	display: inline-block;
	overflow: hidden;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 24px;
	padding: 25px 16px;
  font-family: 'Montserrat';

	color: #282828;
}

.button span,
.button i {
	z-index: 2;
}

.button:active {
	border-color: rgba(0, 0, 0, 0.1);
}

.button::before,
.button::after {
	content: "";
	position: absolute;
	transition: all 0.7s;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}

.button::before {
	background: rgba(28, 28, 28, 1); 
}

.button:active::before {
	background: rgba(28, 28, 28, 0.1);
}

a.button_underlogo_register {
  position: absolute;
  width: 244px;
  height: 29px;
  left: 838px;
  top: 983.45px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #333333;
}



.text_underlogo {
position: absolute;
width: 827.31px;
height: 72px;
left: 546.34px;
top: 842.5px;

font-family: 'ALS Gorizont';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 24px;
text-align: center;

color: #FFFFFF;
}

.text_underlogo_one_red_word {
  /* position: absolute;
width: 128px;
height: 24px;
left: 973.63px;
top: 890.5px;

font-family: 'ALS Gorizont';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 24px;

text-align: center; */

color: #EE215B;

}

.red_element {
  
position: absolute;
width: 532.07px;
height: 532.07px;
left: 1344.42px;
top: 1185.37px;
}

.about_project {
  position: absolute;
width: 662px;
height: 200px;
left: 69.56px;
top: 1146.14px;

font-family: 'ALS Gorizont';
font-style: normal;
font-weight: 800;
font-size: 128px;
line-height: 100px;
/* or 78% */
}

.about_text_1 {
  position: absolute;
width: 1296.67px;
height: 190px;
left: 78.61px;
top: 1426.4px;

font-family: 'ALS Gorizont';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 38px;
/* or 158% */

color: #FFFFFF;
}

.about_text_2 {
  position: absolute;
width: 1296.67px;
height: 190px;
left: 78.61px;
top: 1576.4px;

font-family: 'ALS Gorizont';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 38px;
/* or 158% */
color: #FFFFFF;

}

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
.frame-background {
  top: 0px;
  left: 0px;
  width: 100%;
  
  position:absolute;
  height: 250vh;
  color:#151212;
  z-index: -3;
}

.frame-frame1 {
  position: absolute;
width: 500px;
height: 90px;
left: 710px;
top: 952.95px;

background: #FFFFFF;
border-radius: 50px;
z-index: 1;
}
.main_logo {
  top: 320px;
  left: 13%;
  width: 73%;
  height: 527px;
  position: absolute;
}
/* .frame-image4 {
  top: 120vh;
  left: 0.6%;
  width: 98.8%;
  height: 40vh;
  position: absolute;
} */
  /* .button_underlogo_register {
    position: absolute;
    width: 244px;
    height: 29px;
    left: 838px;
    top: 983.45px;
  
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    z-index: 2;
  
    color: #333333;
  } */
</style>