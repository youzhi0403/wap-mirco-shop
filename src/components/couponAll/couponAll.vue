<template>
    <div class="couponAll coupon" :class="{'receive':receive}">
      <div class="coupon-left">
        <p class="first-line"><span class="small">￥</span>30<span class="block">满139使用</span></p>
        <p class="second-line">全场商品可用全场商品可用全场商品可用全场商品可用全场商品可用</p>
        <p class="third-line">有效期：2019.02.15-2019.03.15</p>
      </div>
      <div class="coupon-right">
        <a class="second-button" v-if="receive">已经领取</a>
        <a class="second-button" v-else>立即领取</a>
        <i class="icon-get" v-show="receive"></i>
      </div>
    </div>

</template>

<script>
export default {
  name: 'couponAll',
  props: {
    receive: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  }
}
</script>

<style lang="stylus">
.couponAll
  height: 6rem;
  color: #ffffff;
  margin: 1.03rem auto;
  display: flex;
  border-radius: 5px;
  width: 23.8rem;
  border-left: 2px solid #F42B52;
  .coupon-left
    float: left;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-basis: 16.31rem;
    width: 16.31rem;
    height: 6rem;
    padding: 0.82rem 0 0 1.2rem;
    background: #fff;
    padding-top: 0.4rem;
    box-sizing: border-box;
    color: #F42B52;
    border-right: 2px dashed #F6F6F6;
    .first-line
      font-size: 1.6rem;
      height: 1.6rem;
      line-height: 1.6rem;
      .small
        font-size: 0.82rem;
      .block
        display: inline-block;
        padding: 0.24rem 0.41rem;
        font-size: 0.82rem;
        line-height: 0.82rem;
        border-radius: 0.82rem;
        color: #f1002d;
        background: #ffeef1;
        margin-left: 0.55rem;
    .second-line
      padding-top: 0.2rem;
      font-size: 0.82rem;
      max-height: 2.2rem;
      line-height: 1rem;
      min-height: 2.2rem;
      height: 2.2rem;
      display: flex;
      align-items: center;
    .third-line
      font-size: 0.82rem;
      line-height: 0.82rem;
      margin-top: 0.48rem;
  .coupon-right
    background: #fff;
    position: relative;
    float: right;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    flex-basis: 7.27rem;
    width: 7.27rem;
    height: 6rem;
    text-align: center;
    .second-button
      font-size: 0.96rem;
      width: 4.83rem;
      height: 1.38rem;
      line-height: 1.38rem;
      border-radius: 1.38rem;
      display: block;
      margin: 0 auto;
      text-align: center;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      background: #f42b52;
  &.receive
    .coupon-right
      a
        background: #fff;
        color: #f42b52;
        border: 1px solid #f42b52;
      .icon-get
        background: url(./hasbrought_icon@2x.png) center no-repeat;
        background-size: contain;
        width: 4rem;
        height: 4rem;
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
</style>
