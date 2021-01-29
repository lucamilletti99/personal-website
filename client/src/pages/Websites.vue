<template>
  <div class="page page--index">
    <h1>Website Links</h1>
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action" to="www.youtube.com">LinkedIn</router-link>
      <router-link class="list-group-item list-group-item-action" to="www.youtube.com">GitHub</router-link>
      <router-link class="list-group-item list-group-item-action" to="www.youtube.com">Facebook</router-link>
      <button type="button" class="btn btn-primary mt-3"  @click= "showContactInfo" >Contact</button>
      <p v-if= "showInfo">Personal: {{ personalEmail }}</p>
      <p v-if= "showInfo">Work: {{ schoolEmail }}</p>
      <p v-if= "showInfo">Cellular: {{ phoneNum }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Resume extends Vue {
    private showInfo: boolean = false;
    private personalEmail: string = "lucamilletti99@gmail.com";
    private schoolEmail: string = "lpm222@lehigh.edu";
    private phoneNum: string = "650-504-0070"
    private showContactInfo(): void{
        this.showInfo = true;
    }
}
</script>
<style>
  body {
    background-image: url('../components/Background.jpg');
    background-size: cover;
    color: white;
    font-family:'Courier New', Courier, monospace;
  }
</style>