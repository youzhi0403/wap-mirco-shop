import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
import classification from '../views/classification/classification'
import member from '../views/member/member'
import myself from '../views/myself/myself'
import shopCart from '../views/shopCart/shopCart'
import testGoodsFilter from '../views/test/test-goods-filter'
import testSelfHelpPopup from '../views/test/test-self-help-popup'
import testGoodsFilterMenu from '../views/test/test-goods-filter-menu'

const routes = [
  { path: '/', redirect: 'home' },
  { name: 'home', path: '/home', component: home, props: true },
  { name: 'classification', path: '/classification', component: classification, props: true },
  { name: 'member', path: '/member', component: member, props: true },
  { name: 'myself', path: '/myself', component: myself, props: true },
  { name: 'shopCart', path: '/shopCart', component: shopCart, props: true },

  { name: 'testGoodsFilter', path: '/testGoodsFilter', component: testGoodsFilter, props: true },
  { name: 'testSelfHelpPopup', path: '/testSelfHelpPopup', component: testSelfHelpPopup, props: true },
  { name: 'testGoodsFilterMenu', path: '/testGoodsFilterMenu', component: testGoodsFilterMenu, props: true }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

export default router
