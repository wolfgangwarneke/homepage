// 'Skill' cards for 'Skills' section
<template lang="pug">
  .skill
    h2.name
      i(v-bind:class="skill.iconClass")
      span {{ skill.name }}
    ul.list-box
      li.list-skills(v-for="skill in skill.list") {{ skill }}
</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Skill',
  props: [ 'skill' ]
};
</script>

<style>
  .skill ul {
    margin: .75rem 0;
  }
  .skill li {
    margin-bottom: .5rem;
    opacity: .9;
    line-height: 1.25rem;
    margin-bottom: .25rem;
  }
  .skill li:last-of-type {
    margin-bottom: 0;
  }
  .skill {
    width: 30%;
    color: white;
  }
  .skill .name {
    font-family: Poppins;
    font-size: 1.75rem;
  }
  .skill .name i {
    font-size: 1.6rem;
    margin-right: .5rem;
    opacity: .925;
  }
  .skill .list-box {
    text-shadow: 1px 1px rgba(0, 0, 0, .08);
    font-family: Poppins;
    height: 300px;
    background: transparent;
    padding: 1rem;
    list-style: none;
    border: 1px solid #ffffff57;
    /* overflow-y: scroll; */
  }
  @media only screen and (max-width: 600px) {
    .skills .name i {
      float: right;
    }
  }
</style>