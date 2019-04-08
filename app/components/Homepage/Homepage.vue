// Homepage 'app' container

<template lang="pug">
  .homepage
    Header
    ConversionHero
    OrbSubHero.cool
    About
    Skills
    Contact
</template>

<script>
import Header from 'comp/Header/Header.vue';
import ConversionHero from 'comp/ConversionHero/ConversionHero.vue';
import OrbSubHero from 'comp/OrbSubHero/OrbSubHero.vue';
import About from 'comp/About/About.vue';
import Skills from 'comp/Skills/Skills.vue';
import Contact from 'comp/Contact/Contact.vue';

export default {
  name: 'Homepage',
  data() {
    return {
      message: 'Hello Homepage',
    };
  },
  components: {
    Header,
    ConversionHero,
    OrbSubHero,
    About,
    Skills,
    Contact
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