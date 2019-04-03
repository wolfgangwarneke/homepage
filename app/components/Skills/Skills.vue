// 'Skills' section
<template lang="pug">
  section.skills
    div.row
      h1.title {{ title }}
      div.skillbox
        Skill(v-for="skill in skills" v-bind:skill="skill")
</template>

<script>
import pageModel from 'app/pageModel';
import Skill from 'comp/Skill/Skill.vue';

export default {
  name: 'Skills',
  data() {
    return {
      ...pageModel.skills,
      skills: Object.entries(pageModel.skills.skillMap).map(entry => ({ name: entry[0], list: entry[1] }))
    }
  },
  components: {
    Skill
  }
};
</script>

<style>
  .skills {
    background: linear-gradient(90deg, #ff9ae1 -20%, #ff6d6b, #ff7975,#f79c48, #d8cfa2 110%);
    min-height: 110vh;
    margin: 2em 0;
    padding: 4vh 1em 2rem;
    margin-top: 0;
  }
  .skills .title {
    font-size: 4rem;
    text-align: left;
    color: #00000059;
    font-family: Poppins;
    text-transform: uppercase;
    border-top: 1px solid #0000003b;
    border-bottom: 4px solid #0000003b;
    margin-bottom: 1rem;
  }
  .skills .skillbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>