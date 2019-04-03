// Homepage 'app' container

<template lang="pug">
  .homepage
    ConversionHero
    OrbSubHero.cool
    About
</template>

<script>
import ConversionHero from 'comp/ConversionHero/ConversionHero.vue';
import OrbSubHero from 'comp/OrbSubHero/OrbSubHero.vue';
import About from 'comp/About/About.vue';

export default {
  name: 'Homepage',
  data() {
    return {
      message: 'Hello Homepage',
    };
  },
  components: {
    ConversionHero,
    OrbSubHero,
    About
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