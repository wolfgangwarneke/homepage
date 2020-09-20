// Primary 'hero' section

<template lang="pug">
  .conversion-hero
    .left
      h1.name(v-html="name")
    .right
      h2.headline {{ headline }}
      h3.subheadline {{ subheadline }}
      a.cta(href="#", v-scroll-to="'.about'") {{ cta }}
    i.fa.fa-chevron-down(v-scroll-to="'.orb-sub-hero'")
</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'ConversionHero',
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
    position: relative;
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
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
  }
  .conversion-hero .cta {
    padding: .35rem 1.25rem;
    color: white;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15), 0 0 10px black;
    background-color: rgba(175, 56, 50, 0.875);
    /* transition: background-color .1s, border-color .1s; */
  }
  .conversion-hero .cta:hover {
    border: 1px solid #fa2d50;
    background-color: rgba(79, 0, 82, 0.2);
    cursor: pointer;
    /* transition: background-color .4s, border-color .4s; */
  }
  .conversion-hero i.fa-chevron-down {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-25%);
    opacity: .8;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color .2s;
  }
  .conversion-hero i.fa-chevron-down:hover {
    color: #fa2d50;
    transition: color .4s;
  }
  @media only screen and (max-width: 900px) {
    .conversion-hero .headline {
      font-size: 4rem;
    }
    .conversion-hero .subheadline {
      margin-top: 1rem;
      /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.75); */
    }
  }
  @media only screen and (max-width: 600px) {
    .conversion-hero {
      flex-direction: column;
      height: 75vh;
    }
    .conversion-hero .left {
      margin: 0 auto;
      width: unset;
    }
    .conversion-hero .name {
      margin: 0;
    }
    .conversion-hero .right {
      width: 100%;
      padding: 0;
    }
    .conversion-hero .headline {
      font-size: 3.25rem;
    }
    .conversion-hero .subheadline {
      font-size: 1.25rem;
    }
    .conversion-hero i.fa-chevron-down {
      bottom: 10px;
    }
  }
  @media only screen and (max-width: 900px) and (orientation: landscape) {
    .conversion-hero .left {
      width: 20%;
    }
    .conversion-hero .right {
      padding-left: 0;
      width: 80%;
    }
    .conversion-hero {
      min-height: 450px;
    }
    .conversion-hero .name {
      font-size: 2rem;
      position: relative;
      left: 1rem;
    }
    .conversion-hero .headline {
      font-size: 3rem;
    }
    .conversion-hero .subheadline {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  @media only screen and (min-width: 1350px) {
    .conversion-hero {
      text-shadow: 40px 40px 4px rgba(255, 255, 255, 0.35);
    }
  }
  @media only screen and (min-width: 1800px) {
    .conversion-hero .name,
    .conversion-hero .subheadline {
      font-size: 4rem;
    }
    .conversion-hero .headline {
      font-size: 10rem;
    }
    .conversion-hero .subheadline {
      margin-bottom: 2.25rem;
    }
    .conversion-hero .cta {
      font-size: 2.25rem;
    }
  }
</style>