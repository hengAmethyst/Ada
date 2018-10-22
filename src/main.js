import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;

const app = new Vue(App)
app.$mount()

// AppId
// 14347827
// API Key
// QREE7asD4si5DHC5PlHAYCZa
// Secret Key
// RF4xG67hdScDkDxoHcbnEokS0xaLLxiu
