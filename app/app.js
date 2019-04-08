import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Homepage from './components/Homepage/Homepage';

Vue.use(VueScrollTo);

new Vue({
  el: '#app',
  render: h => h(Homepage)
})