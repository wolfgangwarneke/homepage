// 'About me' section
<template lang="pug">
  .about
    .image-grid
      .image-container(v-for="image in images")
        img(v-bind:src="image")
    .info
      .left
        h4.headline {{ leftHeadline }}
        p.content {{ leftContent }}
      .right
        h4.headline {{ rightHeadline }}
        p.content {{ rightContent }}
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
    margin: .75rem 0;
  }
  .about .info .content {
    line-height: 1.2rem;
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
    text-align: center;
    margin: 1.5rem calc(100vw - 900px) .5rem;
  }
  @media only screen and (max-width: 900px) {
    .about .callout {
      margin: 2rem 5vw .5rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .about {
      display: flex;
      flex-direction: column;
    }
    .about .info > div {
      width: 100%;
      margin-top: .5rem;
    }
    .about .info {
      flex-direction: column;
    }
    .about .image-grid {
      order: 1;
      flex-wrap: wrap;
    }
    .about .image-container {
      width: 45%;
      margin-bottom: 1rem;
    }
    .about .headline {
      margin-bottom: 1rem;
    }
    .about .right .headline::after {
      content: '';
      border: 1px solid grey;
      width: 95vw;
      height: 1;
      position: relative;
      display: inline-block;
      z-index: 100;
    }
    .about .left .headline::after,
    .about .right .headline::after {
      width: 75vw;
    }
    .about .content {
      padding-right: 12.5%;
    }
    .about .callout {
      margin: 2rem 1rem .5rem;
    }
  }
  @media only screen and (min-width: 900px) {
    .about .info .content {
      font-size: 1.15rem;
      line-height: 1.375rem;
    }
    .about .callout {
      font-size: 2rem;
      margin: 1.5rem 20vw .5rem;
      padding: 1rem 0;
    }
  }
  @media only screen and (min-width: 1800px) {
    .about .info .content {
      max-width: 600px;
    }
  }
</style>