import { createApp } from 'vue'
import App from './App.vue'
import TIcon from './components/Common/TIcon.vue'
import TBtn from './components/Common/TBtn.vue'
import THeader from './components/Common/THeader.vue'
import THeaderItem from './components/Common/THeaderItem.vue'

const app = createApp(App)
app.component("TIcon", TIcon)
app.component("TBtn", TBtn)
app.component("THeader", THeader)
app.component("THeaderItem", THeaderItem)
app.mount("#app")
