import './assets/main.css'

import { Vue } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/css/bootstrap.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    render: (h) => h(App),
}).$mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')
