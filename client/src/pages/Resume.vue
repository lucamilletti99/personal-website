<template>
  <div class="page page--index">
    <h1>Resume</h1>
    <img src = "require('./bottomResume.png')" width = "200px" height="200px">
    <img src = "require('./topResume.png')" width = "200px" height="200px">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';


@Component
export default class Resume extends Vue {
}
</script>