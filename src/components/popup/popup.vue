<template>
    <div class="popup" :class="{'visible':visible}">
      <div class="popup-overlay">
      </div>
      <div class="popup-wrapper">
        <div class="popup-title">
          <slot name="title"></slot>
          <div class="icon-close-container">
            <i class="icon-close"></i>
          </div>
        </div>
        <div class="popup-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style lang="stylus">
.popup
  .popup-overlay
    z-index: 199;
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
    background: #000000;
    opacity: 0.65;
    display: none;
  .popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,100%,0);
    width: 100%;
    height: 65%;
    position: fixed;
    max-width: 640px;
    bottom: 0;
    z-index: 200;
    font-family: 'PingFang Medium_1';
    .popup-title
      width: 100%;
      height: 15%;
      top: 0;
      background: #fff;
      text-align: center;
      position: relative;
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
          display: block;
          margin: 0 auto;
  &.visible
    .popup-overlay
      display:block;
    .popup-wrapper
      transform:translate3d(0,0,0);

</style>
