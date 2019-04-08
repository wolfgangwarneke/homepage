// 'Contact' section
<template lang="pug">
  footer.contact
    h3.heading Want to get in contact or find out more?
    ul.icons
      li.icon
        i.fab.fa-linkedin
      li.icon
        i.fab.fa-github
    div.copyright
      span &copy; Wolfgang Warneke 2019
    div.back-to-top
      span(v-scroll-to="'.conversion-hero'") back to the top

</template>

<script>
import pageModel from 'app/pageModel';

export default {
  name: 'Contact',
  data() {
    return {
      ...pageModel.contact,
    };
  }
};
</script>

<style>
  .contact {
    background-color: white;
    color: black;
    min-height: 300px;
  }
  .contact .heading {
    font-size: 3rem;
    padding: 2.5rem 0 .5rem;
    text-align: center;
  }
  .contact .icons {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 2rem;
    font-size: 3rem;
  }
  .contact .icons .icon {
    margin: 0 .5rem;
    font-size: 4rem;
  }
  .contact .back-to-top,
  .contact .copyright {
    text-align: center;
    margin: 1rem;
  }
  .contact .back-to-top {
    cursor: pointer;
    padding: .5rem;
  }
</style>