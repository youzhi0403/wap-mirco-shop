<template>
    <div class="couponPostage coupon" :class="{'used':propOfUsed}">
      <div class="coupon-left">
        <p class="first-line">5元邮费券</p>
        <p class="second-line">有效期：7天</p>
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
  name: 'couponPostage',
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
.couponPostage
  height: 6rem;
  color: #ffffff;
  margin: 1.03rem auto;
  display: flex;
  border-radius: 5px;
  width: 23.8rem;
  border-left: 2px solid #FFB533;
  .coupon-left
    float: left;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 2px dashed #fff;
    flex-basis: 16.31rem;
    width: 16.31rem;
    height: 6rem;
    padding: 0.82rem 0 0 1.2rem;
    box-sizing: border-box;
    background-color: #F42B52;
    .first-line
      padding-top: 0.31rem;
      box-sizing: border-box;
      font-size: 1.72rem;
      line-height: 1.72rem;
    .second-line
      margin-top: 1.06rem;
      font-size: 0.82rem;
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
      margin-top: 0.48rem;
    .third-line
      font-size: 0.69rem;
      line-height: 0.69rem;
      padding-top: 0.58rem;
  &.used
    .coupon-left
      background: #CFCFCF;
    .coupon-right
      background: #CFCFCF;
      a
        color: #CECECE;
        width: 5.5rem;

</style>
