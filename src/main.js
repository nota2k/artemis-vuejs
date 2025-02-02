import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PxArrowLeftBox } from "oh-vue-icons/icons";
import { createPinia } from 'pinia'

addIcons(PxArrowLeftBox);
const pinia = createPinia()
const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(pinia)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
