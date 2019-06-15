<template>
  <div class="payWayPopup" :class="{'visible': visible}">
    <div class="pay-way-popup-overlay">
    </div>
    <div class="pay-way-popup-wrapper">
      <div class="pay-way-popup-title">
        选择支付方式
        <div class="icon-close-container">
          <i class="icon-close"></i>
        </div>
      </div>
      <div class="pay-way-popup-content">
        <div class="pay-way-number">
          实付金额：<span class="small">￥</span><span class="price">142.00</span>
        </div>
        <div class="pay-way-item">
          <i class="icon-wechat"></i>
          <span class="type">微信支付</span>
        </div>
        <div class="pay-way-item">
          <i class="icon-zhifubao"></i>
          <span class="type">支付宝支付</span>
        </div>
        <div class="pay-way-item">
          <i class="icon-remain"></i>
          <span class="type">余额支付</span>
          <span class="num">￥1600</span>
        </div>
        <div class="pay-way-item">
          <i class="icon-cash"></i>
          <span class="type">货到付款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payWayPopup',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style lang="stylus">
.payWayPopup
  .pay-way-popup-overlay
    z-index: 199;
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    margin: 0 auto;
    top: 0;
    background: #000000;
    opacity: 0.65;
    display: none;
  .pay-way-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate(-300%,0);
    width: 100%;
    position: fixed;
    max-width: 640px;
    margin: 0 auto;
    bottom: 0;
    z-index: 200;
    font-family: 'PingFang Medium_1';
    .pay-way-popup-title
      height: 3.86rem;
      width: 100%;
      position: relative;
      background: #fff;
      text-align: center;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-close-container
        width: 2.89rem;
        height: 2.89rem;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translate(0,-50%);
        display: flex;
        align-items: center;
        .icon-close
          background: url(./close_iocn@2x.png) center no-repeat;
          background-size: contain;
          width: 0.89rem;
          height: 0.89rem;
          margin: 0 auto;
    .pay-way-popup-content
      height: 31.26rem;
      width: 100%;
      box-sizing: border-box;
      background: #fff;
      .pay-way-number
        padding-top: 1.72rem;
        margin-bottom: 1.2rem;
        font-size: 1.1rem;
        color: #313131;
        text-align: center;
        .small
          font-size: 0.69rem;
          color: #f1002d;
        .price
          font-size: 1.38rem;
          color: #f1002d;

      .pay-way-item
        margin-left: 1.38rem;
        box-sizing: border-box;
        height: 5.1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f6f6f6;
        i
          width: 2.38rem;
          height: 2.38rem;
          display: inline-block;
          margin-right: 1.27rem;
          &.icon-wechat
            background: url(./wechat_pay@2x.png) center no-repeat;
            background-size: contain;
          &.icon-zhifubao
            background: url(./Alipay@2x.png) center no-repeat;
            background-size: contain;
          &.icon-remain
            background: url(./wallet_pay@2x.png) center no-repeat;
            background-size: contain;
          &.icon-cash
            background: url(./cashondelivery@2x.png) center no-repeat;
            background-size: contain;
        .type
          display: inline-block;
          font-size: 1.1rem;
          color: #2f2f2f;
        .num
          margin-left: auto;
          margin-right: 2.13rem;
          font-size: 1.1rem;
          color: #8d8d8d;
  &.visible
    .pay-way-popup-overlay
      display:none;
    .pay-way-popup-wrapper
      transform: translate3d(0,0,0);
</style>
