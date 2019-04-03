// Primary 'hero' section

<template lang="pug">
  .conversion-hero
    .left
      h1.name(v-html="name")
    .right
      h2.headline {{ headline }}
      h3.subheadline {{ subheadline }}
</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Homepage',
  data() {
    return pageModel.conversionHero;
  }
};
</script>

<style>
  .conversion-hero {
    color: white;
    background: linear-gradient(rgb(2, 4, 10), transparent 3%, transparent 90%, rgb(2, 4, 10)), linear-gradient(to right, #ffffff00, #00000038, #0000003b, #00000045, #ffffff00), linear-gradient(to right, #67666600, #3f3b4300), no-repeat right/cover url(./glitchart.jpg);
    display: flex;
    height: 100vh;
    text-align: center;
    padding-top: 12vh;
    margin-top: 0;
  }
  .conversion-hero .left {
    width: 30%;
  }
  .conversion-hero .right {
    box-sizing: border-box;
    width: 70%;
    padding: 0 4%;
  }
  .conversion-hero .name,
  .conversion-hero .headline {
    margin-top: 1rem;
  }
  .conversion-hero .name {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.3em;
    font-weight: 300;
  }
  .conversion-hero .headline {
    color: #fff8ea;
    text-shadow: 0 0 4px #00000057, 0 0 10px #00000014, 1px 1px #00000012;
    font-size: 5rem;
    margin-bottom: 0;
  }
  .conversion-hero .subheadline {
    font-size: 2rem;
    margin: 2rem;
  }
</style>