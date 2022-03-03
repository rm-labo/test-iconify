import { createApp } from 'vue'
import App from './App.vue'

import { Icon } from '@iconify/vue';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faArchive, faBook, faCoffee, faDrum, faEnvelope, faFire, faGift, faHistory, faInfo, faKey } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faArchive, faBook, faCoffee, faDrum, faEnvelope, faFire, faGift, faHistory, faInfo, faKey)

createApp(App)
  .component('Icon', Icon )
  // .component('fa', FontAwesomeIcon )
  .mount('#app')
