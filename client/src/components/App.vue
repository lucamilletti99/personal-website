<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #039BE5;">
      <a class="navbar-brand" href="#">
          <img src="images/software-dev.png" alt="" width="100px">
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
              <router-link class="nav-link" to="/Websites">Websites and Links</router-link>
            </li>
          </ul>
        </div>
    </nav>
    <div class="container mt-3">
      <router-view class="mt-5"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { component } from 'vue/types/umd';

@Component
export default class App extends Vue {}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Righteous');
  .about-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }
  .about-logo a:hover {
    opacity: 0.8;
  }

</style>