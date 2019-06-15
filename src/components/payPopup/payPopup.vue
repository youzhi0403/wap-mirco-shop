<template>
    <div class="payPopup" :class="{'visible': visible}">
      <div class="pay-title">
        <slot name="title"></slot>
      </div>
      <div class="pay-content">
        <div class="pay-show">
          <div class="pay-show-point"></div>
          <div class="pay-show-point"></div>
          <div class="pay-show-point"></div>
          <div class="pay-show-point"></div>
          <div class="pay-show-point"></div>
          <div class="pay-show-point"></div>
          <input type="password" style="display: none" maxlength="6">
        </div>
        <div class="pay-button">确定</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'payPopup',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style lang="stylus">
.payPopup
  .pay-popup-wrapper
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
    .pay-title
      height: 3.86rem;
      width: 100%;
      position: relative;
      background: #fff;
      text-align: center;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;
    .pay-content
      height: 31.26rem;
      width: 100%;
      box-sizing: border-box;
      background: #fff;
      padding-top: 1.72rem;
      .pay-show
        box-sizing: border-box;
        margin: 0 1.27rem 0 1.38rem;
        border: 1px solid #969696;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        .pay-show-point
          display: inline-block;
          flex: 1;
          height: 3.17rem;
          font-size: 0;
          position: relative;
          &:not(:last-child)
            border-right: 1px solid #969696;
        input
          outline: none;
          background: none;
          padding: 0;
          font-family: inherit;
          line-height: inherit;
          margin: 0;
          border: none;
          color: inherit;
          font-size: inherit;
      .pay-button
        width: 23.8rem;
        height: 2.76rem;
        line-height: 2.76rem;
        text-align: center;
        background: #969696;
        border-radius: 2.76rem;
        color: #ffffff;
        font-size: 1.24rem;
        margin: 22rem auto 0 auto;
        &.active
          background: linear-gradient(to right,#FF8300,#FF5700);
    &.visible
      transform: translate(0,0);
  &
  &.visible
    .pay-popup-wrapper
      transform: translate(0,0);
</style>
