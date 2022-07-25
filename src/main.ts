import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/tailwind.css'
import '@/assets/style.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mdiVue, {
  icons: mdijs
})

app.mount('#app')
