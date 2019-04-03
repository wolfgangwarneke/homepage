// Orb 'sub-hero' section

<template lang="pug">
  section.orb-sub-hero
    div.container
      h1 {{ message }}
      div.orb-image-container
        img.orb-image(src="~/images/orb.jpg")
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

<style scoped>
  .orb-sub-hero {
    text-align: center;
    color: white;
    background: black;
    display: flex;
    justify-content: space-around;
  }
  .orb-sub-hero .container {
    width: 80vw;
    max-width: 1000px;
  }
  .orb-sub-hero h1 {
    font-size: 3.2rem;
    margin-bottom: 0;
  }
  .orb-image {
    width: 40vh;
    max-width: 40vh;
    height: 40vh;
    max-height: 40vh;
  }
</style>