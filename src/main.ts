import { createApp } from 'vue'
import { router } from "./router"
import { createVuetify } from 'vuetify/lib/framework.mjs'

import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ 
    components,
    directives
});

createApp(App)
.use(vuetify)
.use(router)
.mount('#app')