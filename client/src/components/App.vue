<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #039BE5;">
      <a class="navbar-brand" href="#">
          <img src="images/lehigh-logo.png" alt="" width="100px" >
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>Welcome</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aboutMe">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Resume">Resume/CV</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/websites">Websites/Links</router-link>
            </li>
          </ul>
        </div>
        <a class="navbar-brand" href="#">
          <typeJoke></typeJoke>
        </a>
    </nav>
    <div class="container mt-3">
      <router-view class="mt-5"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { component } from 'vue/types/umd';
import typeJoke from './typeJoke.vue'
@Component({
  components: {
    typeJoke
  }
})
export default class App extends Vue {}
</script>
<style>
  body {
    background-image: url('../components/Background.jpg');
    background-size: cover;
    color: white;
    font-family:'Courier New', Courier, monospace;
  }
</style>

