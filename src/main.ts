import '@/assets/main.css'

import { createApp } from 'vue'
import AppOptions from './AppOptions2.vue'
import router from '@/router'

const app = createApp(AppOptions)

app.use(router)

app.mount('#app')
