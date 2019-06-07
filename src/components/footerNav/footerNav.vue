<template>
    <div class="footerNav">
      <div class="footerNav-item" @click.stop.prevent="toHome" :class="{active:(routerName === 'home')}">
        <i class="horizontal-center iconfont home-nav">
        </i>
        <p class="horizontal-center icon-text">首页</p>
      </div>

      <div class="footerNav-item" @click.stop.prevent="toClassification" :class="{active:(routerName === 'classification')}">
        <i class="horizontal-center iconfont classification-nav">
        </i>
        <p class="horizontal-center icon-text">分类</p>
      </div>

      <div class="footerNav-item" @click.stop.prevent="toMember" :class="{active:(routerName === 'member')}">
        <i class="horizontal-center iconfont member-nav">
        </i>
        <p class="horizontal-center icon-text">会员中心</p>
      </div>

      <div class="footerNav-item" @click.stop.prevent="toShopCart" :class="{active:(routerName === 'shopCart')}">
        <i class="horizontal-center iconfont shopcart-nav">
        </i>
        <p class="horizontal-center icon-text">
          购物车
          <span class="icon-num">
          </span>
        </p>
        <bubble :num="shopCartNum" v-if="shopCartNum > 0" :bg="bg"></bubble>
      </div>

      <div class="footerNav-item" @click.stop.prevent="toMyself" :class="{active:(routerName === 'myself')}">
        <i class="horizontal-center iconfont myself-nav">
        </i>
        <p class="horizontal-center icon-text">个人</p>
      </div>
    </div>
</template>

<script>
import Bubble from '../bubble/bubble'
export default {
  name: 'footerNav',
  components: { Bubble },
  props: {
    propOfRouterName: {
      type: String,
      default: function () {
        return 'home'
      }
    }
  },
  data () {
    return {
      routerName: '',
      shopCartNum: 10,
      bg: 'type-2'
    }
  },
  created () {
    this.routerName = this.propOfRouterName
  },
  methods: {
    toHome () {
      this.routerName = 'home'
      this.$router.push({ name: 'home' })
    },
    toClassification () {
      this.routerName = 'classification'
      this.$router.push({ name: 'classification' })
    },
    toShopCart () {
      this.routerName = 'shopCart'
      this.$router.push({ name: 'shopCart' })
    },
    toMyself () {
      this.routerName = 'myself'
      this.$router.push({ name: 'myself' })
    },
    toMember () {
      this.routerName = 'member'
      this.$router.push({ name: 'member' })
    }
  }
}
</script>

<style lang="stylus">
.footerNav
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  background-color: #fff;
  height: 3.5rem;
  max-width: 640px;
  box-shadow: 0 8px 30px grey;
  font-family: 'PingFang Bold_1';
  .footerNav-item
    color: #767676;
    font-size: 1rem;
    position: relative;
    height: 3.5rem;
    width: 20%;
    text-align: center;
    .iconfont
      position: absolute;
      width: 22%;
      height: 1.5rem;
      display: block;
      top: 0.5rem;
      left: 50%;
      transform: translate(-50%, 0);
      &.home-nav
        background: url(./tab_home@2x.png) center no-repeat;
        background-size: contain;
      &.classification-nav
        background: url(./tab_clas@2x.png) center no-repeat;
        background-size: contain;
      &.member-nav
        background: url(./tab_member@2x.png) center no-repeat;
        background-size: contain;
      &.shopcart-nav
        background: url(./tab_car@2x.png) center no-repeat;
        background-size: contain;
      &.myself-nav
        background: url(./tab_mine@2x.png) center no-repeat;
        background-size: contain;
    .icon-text
      position: absolute;
      bottom: 0.2rem;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 0.8rem;
      width: 100%;
    &.active
      .iconfont
        &.home-nav
          background: url(./tab_home_pre@2x.png) center no-repeat;
          background-size: contain;
        &.classification-nav
          background: url(./tab_clas_pre@2x.png) center no-repeat;
          background-size: contain;
        &.member-nav
          background: url(./tab_member_pre@2x.png) center no-repeat;
          background-size: contain;
        &.shopcart-nav
          background: url(./tab_car_pre@2x.png) center no-repeat;
          background-size: contain;
        &.myself-nav
          background: url(./tab_mine_pre@2x.png) center no-repeat;
          background-size: contain;
    .bubble
      left: 55%;
      top: 5%;
      position: absolute;
</style>
