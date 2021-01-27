<template>
  <div class="page page--index"> 
    <h3 class="mt-2">Welcome to my website</h3>
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action" to="/aboutMe">About Me</router-link>
      <router-link class="list-group-item list-group-item-action" to="/Resume">Resume/CV</router-link>
      <router-link class="list-group-item list-group-item-action" to="/websites">Personal Website Links</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class IndexPage extends Vue {
}
</script>