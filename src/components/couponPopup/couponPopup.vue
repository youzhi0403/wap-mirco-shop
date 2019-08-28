<template>
    <popup class="couponPopup" ref="popup">
      <template slot="title">
        优惠
      </template>
      <template slot="content">
        <div class="coupon-partOne">
          <div class="partOne-left">
            <span>积分</span>
          </div>
          <div class="partOne-right">
            可获得35积分
          </div>
        </div>
        <div class="coupon-partTwo">
          <div class="partTwo-left">
            领券
          </div>
          <div class="partTwo-right">
            已有积分：5000
          </div>
        </div>
        <div class="coupon-partThree">
          <coupon-shopping></coupon-shopping>
          <coupon-postage></coupon-postage>
          <coupon-restrictive></coupon-restrictive>
          <coupon-all></coupon-all>
          <coupon-shopping :prop-of-used="true"></coupon-shopping>
          <coupon-postage :prop-of-used="true"></coupon-postage>
          <coupon-restrictive :receive="true"></coupon-restrictive>
          <coupon-all :receive="true"></coupon-all>
        </div>
      </template>
    </popup>
</template>

<script>
import Popup from '../popup/popup'
import CouponShopping from '../couponShopping/couponShopping'
import CouponPostage from '../couponPostage/couponPostage'
import CouponRestrictive from '../couponRestrictive/couponRestrictive'
import CouponAll from '../couponAll/couponAll'
export default {
  name: 'couponPopup',
  components: { CouponAll, CouponRestrictive, CouponPostage, CouponShopping, Popup },
  methods: {
    showPopup: function () {
      this.$refs['popup'].show()
    }
  }
}
</script>

<style lang="stylus">
.couponPopup
  .coupon-partOne
    padding: 1.03rem;
    display: flex;
    align-items: center;
    .partOne-left
      flex-basis: 3rem;
      span
        font-size: 0.69rem;
        line-height: 0.69rem;
        color: #ff5900;
        background: #FFEEE5;
        padding: 0.1rem 0.2rem;
        vertical-align: middle;
    .partOne-right
      font-size: 0.96rem;
      flex: 1;
  .coupon-partTwo
    padding: 1.38rem 1.03rem;
    display: flex;
    align-items: center;
    .partTwo-left
      flex-basis: 3rem;
      font-size: 0.96rem;
    .partTwo-right
      line-height: 1.4rem;
      font-size: 1.1rem;
      flex: 1;
      color: #666666;
      text-align: right;
  .coupon-partThree
    .coupon
      &:first-child
        margin: 0 auto;

</style>
