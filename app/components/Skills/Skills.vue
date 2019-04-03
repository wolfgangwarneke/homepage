// 'Skills' section
<template lang="pug">
  section.skills
    div.row
      h1.title {{ title }}
</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Skills',
  data() {
    return pageModel.skills
  }
};
</script>

<style>
  .skills {
    background: linear-gradient(90deg, #ff9ae1 -20%, #ff6d6b, #ff7975,#f79c48, #d8cfa2 110%);
    min-height: 110vh;
    margin: 2em 0;
    padding: 4vh 1em 0;
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
</style>