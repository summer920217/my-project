import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import { 
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid, 
  GridItem,
  Col, 
  Row,
  Image as VanImage,
  CountDown 
} from 'vant';
import 'vant/lib/index.css';

Vue
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(Grid)
.use(GridItem)
.use(Row)
.use(Col)
.use(VanImage)
.use(CountDown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
