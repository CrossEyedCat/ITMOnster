<template>
    <div class="progress-bar-white">
        <div class="progress-bar-red" :style="{width: my_percent}"></div>
        <div class="progress-bar-text">{{ my_title }}</div>
        <div class="progress-bar-percent">{{ my_percent }}</div>
    </div>
</template>

<style>
.progress-bar-white {
    position: relative;
    display: flex;
    align-items: center;

    background-color: #FFFFFF;
    width: 704.65px;
    height: 70px;
    margin-bottom: 7.5px;
}
.progress-bar-white:hover{
    cursor: pointer;
    color: rgb(31, 31, 31);
    transform: scale(1.01);
}
.progress-bar-red {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #EE215B;
    height: 100%;
    z-index: 1;
}
.progress-bar-percent {
    width: 80px;
    height: 55px;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: 10px;
    font-family: 'Montserrat';
    font-size: 20px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
}

.progress-bar-text {
    margin-left: auto;
    justify-self: center;
    z-index: 2;
    font-family: 'Montserrat';
    font-size: 20px;
}
</style>

<script>
export default {
  props: {
    my_title: String,
    my_percent: String,
  }
};
</script>