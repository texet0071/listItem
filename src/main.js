import { createApp } from 'vue'
import App from "./App";
import components from '@/components/UI'
import router from "@/router/router";
import Vintersection from "@/dirictives/Vintersection";
import dirictives from '@/dirictives'
import store from '@/store'

console.log(components)

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

dirictives.forEach( directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app')
