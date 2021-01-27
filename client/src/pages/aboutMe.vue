<template>
  <div class="page page--index">
    <div class="alert alert-success" role="alert">
      Congrats! It looks like you got the app up & running.
    </div>
    <h3 class="mt-2">Welcome</h3>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class IndexPage extends Vue {}
</script>