import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
import classification from '../views/classification/classification'
import member from '../views/member/member'
import myself from '../views/myself/myself'
import shopCart from '../views/shopCart/shopCart'
import testGoodsFilter from '../views/test/components/test-goods-filter'
import testSelfHelpPopup from '../views/test/components/test-self-help-popup'
import testGoodsFilterMenu from '../views/test/components/test-goods-filter-menu'
import testGoodsList from '../views/test/components/test-goods-list'
import testGoods from '../views/test/views/test-goods'
import testGoodsWithMenu from '../views/test/views/test-goods-with-menu'
import testSubmit from '../views/test/views/test-submit'
import testAddressAddPopup from '../views/test/components/test-address-add-popup'
import goodDetail from '../views/goodDetail/goodDetail'
import testSwipe from '../views/test/views/test-swipe'
import goodsWithMenu from '../views/goodsWithMenu/goodsWithMenu'
import goods from '../views/goods/goods'
import search from '../views/search/search'

const routes = [
  { path: '/', redirect: 'home' },
  { name: 'home', path: '/home', component: home, props: true },
  { name: 'classification', path: '/classification', component: classification, props: true },
  { name: 'member', path: '/member', component: member, props: true },
  { name: 'myself', path: '/myself', component: myself, props: true },
  { name: 'shopCart', path: '/shopCart', component: shopCart, props: true },
  { name: 'goodDetail', path: '/goodDetail', component: goodDetail, props: true },
  { name: 'goodsWithMenu', path: '/goodsWithMenu', component: goodsWithMenu, props: true },
  { name: 'goods', path: '/goods', component: goods, props: true },
  { name: 'search', path: '/search', component: search, props: true },

  { name: 'testGoodsFilter', path: '/testGoodsFilter', component: testGoodsFilter, props: true },
  { name: 'testSelfHelpPopup', path: '/testSelfHelpPopup', component: testSelfHelpPopup, props: true },
  { name: 'testGoodsFilterMenu', path: '/testGoodsFilterMenu', component: testGoodsFilterMenu, props: true },
  { name: 'testGoodsList', path: '/testGoodsList', component: testGoodsList, props: true },
  { name: 'testGoods', path: '/testGoods', component: testGoods, props: true },
  { name: 'testGoodsWithMenu', path: '/testGoodsWithMenu', component: testGoodsWithMenu, props: true },
  { name: 'testSubmit', path: '/testSubmit', component: testSubmit, props: true },
  { name: 'testAddressAddPopup', path: '/testAddressAddPopup', component: testAddressAddPopup, props: true },
  { name: 'testSwipe', path: '/testSwipe', component: testSwipe, props: true }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

export default router
