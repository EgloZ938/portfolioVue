import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)
app.use(MotionPlugin)
app.use(VueScrollTo, {
    duration: 1500,
    easing: [0.25, 0.1, 0.25, 1.0],
    offset: 0
})
app.mount('#app')