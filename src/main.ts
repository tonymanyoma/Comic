// import './assets/main.css'

import './assets/stylesheets/application.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Vue3StarRatings from "vue3-star-ratings";

import App from './App.vue'
import router from './router'


const app = createApp(App)

// app.component("vue3-star-ratings", Vue3StarRatings);
app.use(createPinia())
app.use(router)

app.mount('#app')
