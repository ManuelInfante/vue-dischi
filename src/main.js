import Vue from 'vue';
import App from './App.vue';

// Import Font Montserrat tramite fontsurce su npm
import "@fontsource/montserrat";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
