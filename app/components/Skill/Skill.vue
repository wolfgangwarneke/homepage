// 'Skill' cards for 'Skills' section
<template lang="pug">
  .skill
    h2.name {{ skill.name }}
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
  .skill {
    width: 30%;
    color: white;
  }
  .skill .name {
    font-family: Poppins;
    font-size: 2rem;
  }
  .skill .list-box {
    text-shadow: 1px 1px #00000024;
    font-family: Poppins;
    height: 300px;
    background: transparent;
    padding: 1rem;
    list-style: none;
    border: 1px solid #ffffff57;
  }
</style>