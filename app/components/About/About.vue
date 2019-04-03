// 'About me' section
<template lang="pug">
  .about
    .image-grid
      .image-container(v-for="image in images")
        img(v-bind:src="image")
    .info
      .left
        h4.headline {{ leftHeadline }}
        .content {{ leftContent }}
      .right
        h4.headline {{ rightHeadline }}
        .content {{ rightContent }}
    blockquote
      h2.callout {{ callout }}
</template>

<script>
import pageModel from 'app/pageModel';
import backlit from './images/backlitplants_thumbnail.jpg';
import daisy from './images/daisy_thumbnail.jpg';
import hayStackRock from './images/haystackrock_thumbnail.jpg';
import tulipFestival from './images/tulipFestival_thumbnail.jpg';

export default {
  name: 'About',
  data() {
    return {
      ...pageModel.about,
      images: [
        backlit,
        daisy,
        hayStackRock,
        tulipFestival
      ]
    };
  }
};
</script>

<style>
  .about {
    background: white;
    color: black;
    padding-bottom: 1rem;
  }
  .about .image-grid {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 1rem;
  }
  .about .image-container {
    width: 22.5%;
  }
  .about .image-container img {
    max-width: 100%;
  }
  .about .info {
    display: flex;
  }
  .about .info > div {
    width: 50%;
    padding: 0 1rem;
  }
  .about .info .headline {
    font-size: 1.75rem;
  }
  .about .left .headline::after {
    content: '';
    border: 1px solid grey;
    width: 95vw;
    height: 1;
    position: relative;
    display: inline-block;
    z-index: 100;
  }
  .about .callout {
    font-size: 1.75rem;
  }
</style>