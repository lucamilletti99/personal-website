<template>
  <div class="container">
    <h2 style = "color: black; font-size: 16px">Who am I?
      <span style = "color: white; font-size: 30px" class="typed-text">{{ typeValue }}</span>
      <span style = "color: white; font-size: 30px" class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h2>
  </div>
  
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Engineer','Student','Singer','Electrical Engineer','Circuit Tutor','CS Tutor','Student','Beatboxer','Writing Fellow','Computer Engineer','Calculus Tutor','University Choir'],
        typingSpeed: 100,
        erasingSpeed: 50,
        newTextDelay: 750,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    opacity: 0.5;
    font-size: 10px
    color: black;
    span.typed-text {
      color: white;
      font-size: 14px
    }
    span.cursor {
      display: inline-block;
      width: 4px;
      color: white;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
      font-size: 14px
    }
    span.cursor.typing {
      animation: none;
      color: white;
    }
  }