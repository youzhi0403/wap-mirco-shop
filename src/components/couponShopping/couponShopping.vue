<template>
  <div class="couponShopping coupon" :class="{'used':propOfUsed}">
    <div class="coupon-left">
      <p class="first-line">购物津贴</p>
      <p class="second-line">100%刮中奖&nbsp;&nbsp;最高88元</p>
      <p class="third-line">有效期：2019.02.15-2019.03.15</p>
    </div>
    <div class="coupon-right">
      <p class="first-line">200积分</p>
      <a class="second-button" v-if="propOfUsed">机会已用完</a>
      <a class="second-button" v-else>立即兑换</a>
      <p class="third-line">兑换机会：2次</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'couponShopping',
  props: {
    propOfUsed: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  }
}
</script>

<style lang="stylus">
.couponShopping
  height: 6rem;
  color: #ffffff;
  margin: 1.03rem auto;
  display: flex;
  border-radius: 5px;
  width: 23.8rem;
  border-left: 2px solid black;
  .coupon-left
    float: left;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 2px dashed #fff;
    flex-basis: 16.31rem;
    width: 16.31rem;
    height: 6rem;
    padding: 0.82rem 0 0 1.2rem;
    background-color: #F42B52;
    box-sizing: border-box;
    .first-line
      font-size: 1.75rem;
      line-height: 1.75rem;
    .second-line
      font-size: 0.82rem;
      margin-top: 0.48rem;
      line-height: 0.82rem;
    .third-line
      font-size: 0.82rem;
      margin-top: 0.48rem;
      line-height: 0.82rem;
  .coupon-right
    float: right;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    flex-basis: 7.27rem;
    width: 7.27rem;
    height: 6rem;
    text-align: center;
    position: relative;
    background-color: #F42B52;
    .first-line
      font-size: 0.82rem;
      line-height: 0.82rem;
      padding-top: 1rem;
      box-sizing: border-box;
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
      background: #fff;
      color: #f42b52;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    .third-line
      font-size: 0.69rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%,0);
      width: 100%;
      bottom: 0.5rem;
      line-height: 20px;
  &.used
    .coupon-left
      background: #CFCFCF;
    .coupon-right
      background: #CFCFCF;
      a
        color: #CECECE;
        font-size: 0.75rem;
        width: 5.5rem;
</style>
