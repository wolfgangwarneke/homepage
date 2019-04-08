// 'Contact' section
<template lang="pug">
  header.header
    h1.logo(v-scroll-to="'.conversion-hero'") {{ initials }}
    ul.icons
      li.icon
        a(:href="links.linkedIn.href")
          i(:class="links.linkedIn.iconClass")
      li.icon
        a(:href="links.gitHub.href")
          i(:class="links.gitHub.iconClass")

</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Header',
  data() {
    return {
      ...pageModel.global,
    };
  }
};
</script>

<style>
  .header {
    background: linear-gradient(rgba(0,0,0, .35), rgba(0, 0, 0, .15) 40%, rgba(0, 0, 0, .1) 55%, transparent);
    height: 5rem;
    position: fixed;
    width: 100%;
    z-index: 1;
    text-align: center;
    padding-top: .5rem;
    text-shadow: 0 0 3px rgba(0, 0, 0, .1);
    pointer-events: none;
  }
  .header > * {
    pointer-events: initial;
  }
  .header a {
    color: #fff;
    transition: color .1s;
  }
  .header a:hover {
    color: #151515;
    transition: color .2s;
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
  @media only screen and (max-width: 600px) {
    .header .logo,
    .header .icons {
      font-size: 2rem;
    }
  }
</style>