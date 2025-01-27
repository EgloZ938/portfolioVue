import './assets/main.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)  // Stocke l'application dans une variable
app.use(MotionPlugin)       // Ajoute le plugin
app.mount('#app')           // Monte l'application