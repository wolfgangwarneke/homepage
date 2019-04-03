// Homepage 'app' container

<template lang="pug">
  .homepage
    div
      h1 {{ message }}
    OrbSubHero.cool
</template>

<script>
import OrbSubHero from 'comp/OrbSubHero/OrbSubHero.vue';

export default {
  name: 'Homepage',
  data() {
    return {
      message: 'Hello Homepage',
    };
  },
  components: {
    OrbSubHero
  }
};
</script>

<style>
  .homepage {
    color: white;
    background: black;
    font-family: Rufina, serif;
  }
</style>