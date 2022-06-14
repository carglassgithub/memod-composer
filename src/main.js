import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import App from './App.vue'
import './assets/base.scss'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.core.css'

Vue.use(VueCompositionAPI)

const app = createApp({
  render: () => h(App)
})

app.mount('#app')
