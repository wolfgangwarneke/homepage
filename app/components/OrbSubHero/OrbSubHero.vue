// Orb 'sub-hero' section

<template lang="pug">
  section.orb-sub-hero
    div.container
      h1.statement {{ message }}
      div.orb-image-container
        img.orb-image(src="./orb.jpg")
</template>

<script>
import pageModel from 'app/pageModel';
const { orb } = pageModel;

export default {
  name: 'Homepage',
  data() {
    return {
      message: orb.message,
    };
  },
};
</script>

<style>
  .orb-sub-hero {
    text-align: center;
    color: white;
    background: black;
    display: flex;
    justify-content: space-around;
  }
  .orb-sub-hero .container {
    width: 80vw;
    max-width: 900px;
    margin: 3rem auto;
  }
  .orb-sub-hero .statement {
    font-size: 3.2rem;
    margin-bottom: 0;
  }
  .orb-image {
    width: 40vh;
    max-width: 40vh;
    height: 40vh;
    max-height: 40vh;
  }
  @media only screen and (max-width: 900px) and (orientation: landscape) {
    .orb-sub-hero .statement {
      font-size: 2.25rem;
    }
  }
  @media only screen and (max-width: 900px) {}
  @media only screen and (max-width: 600px) {
    .orb-sub-hero .statement {
      font-size: 2rem;
      margin-top: 1rem;
    }
    .orb-image {
      width: 30vh;
      max-width: 30vh;
      height: 30vh;
      max-height: 30vh;
    }
  }
  @media only screen and (min-width: 900px) {
    .orb-sub-hero {
      padding-top: 6rem;
    }
  }
</style>