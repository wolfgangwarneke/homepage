// 'Contact' section
<template lang="pug">
  header.header
    h1.logo(v-scroll-to="'.conversion-hero'") WW
    ul.icons
      li.icon
        i.fab.fa-linkedin
      li.icon
        i.fab.fa-github

</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Header',
  data() {
    return {
      ...pageModel.header,
    };
  }
};
</script>

<style>
  .header {
    background: linear-gradient(rgba(0,0,0, .75), rgba(0, 0, 0, .3) 40%, rgba(0, 0, 0, .2) 50%, transparent);
    position: fixed;
    width: 100%;
    z-index: 1;
    text-align: center;
    padding-top: .5rem;
    text-shadow: 0 0 3px rgba(0, 0, 0, .1);
  }
  .header .logo {
    display: inline-block;
    position: absolute;
    left: 0;
    margin-left: .5rem;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3rem;
    font-weight: normal;
    cursor: pointer;
  }
  .header .icons {
    position: absolute;
    left: 100vw;
    transform: translateX(-105%);
    display: flex;
    font-size: 3rem;
  }
  .header .icon {
    margin: 0 .25rem;
  }
</style>