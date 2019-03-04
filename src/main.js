import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import preview from 'vue-photo-preview'
// import VueLazyload from 'vue-lazyload'
import '@/common/style/index.scss';
import 'muse-ui/dist/muse-ui.css';
import 'vue-photo-preview/dist/skin.css'

// Vue.use(VueLazyload)
// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: '@/img/logo.png',
//   attempt: 1
// })
Vue.use(preview)
Vue.use(MuseUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
