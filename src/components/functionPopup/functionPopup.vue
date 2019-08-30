<template>
    <div class="functionPopup" :class="{'visible':visible}">
      <div class="function-popup-overlay" id="function_popup_overlay" @click.stop.prevent="hideFunctionPopup">
      </div>
      <div class="function-popup-wrapper">
        <div class="function-popup-title">
          <span class="function-popup-title-text">
            功能直达
          </span>
          <div class="icon-close-container" @click.stop.prevent="hideFunctionPopup">
            <i class="icon-close"></i>
          </div>
        </div>
        <div class="function-popup-content">
          <a class="function-item">
            <div class="item-container">
              <i class="icon-news"></i>
              <p>消息</p>
            </div>
          </a>
          <a class="function-item">
            <div class="item-container">
              <i class="icon-home"></i>
              <p>首页</p>
            </div>
          </a>
          <a class="function-item">
            <div class="item-container">
              <i class="icon-search"></i>
              <p>搜索</p>
            </div>
          </a>
          <a class="function-item">
            <div class="item-container">
              <i class="icon-collect"></i>
              <p>收藏</p>
            </div>
          </a>
          <a class="function-item">
            <div class="item-container">
              <i class="icon-service"></i>
              <p>咨询</p>
            </div>
          </a>

          <a class="function-item">
            <div class="item-container">
              <i class="icon-cart"></i>
              <p>购物车</p>
            </div>
          </a>
          <a class="function-item" @click.stop.prevent="showRecordPopup">
            <div class="item-container">
              <i class="icon-record"></i>
              <p>浏览记录</p>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'functionPopup',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showFuntionPopup: function () {
      console.log('12')
      this.visible = true
    },
    hideFunctionPopup: function () {
      this.visible = false
    },
    showRecordPopup () {
      const instance = this.$createRecordPopup({
      })
      instance.$on('closeRecordPopup', () => {
        instance.remove()
      })
      let _this = this
      setTimeout(function () {
        _this.hideFunctionPopup()
        instance.visible = true
      }, 0)
    }
  }
}
</script>

<style lang="stylus">
.functionPopup
  .function-popup-overlay
    z-index: 199;
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
    background: #000000;
    opacity: 0.65;
    display: none;
  .function-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,200%,0);
    width: 100%;
    max-width: 640px;
    height: 16.1rem;
    position: fixed;
    bottom: 16.1rem;
    z-index: 200;
    font-family: 'PingFang Medium_1';
    background-color: #191919;
    opacity: 0.9;
    .function-popup-title
      width: 100%;
      height: 2.41rem;
      top: 0;
      position: relative;
      font-size: 0.96rem;
      color: #fff;
      display: flex;
      align-items: center;
      .function-popup-title-text
        position: absolute;
        display: inline-block;
        left: 1.5rem;
        line-height: 0.96rem;
      .icon-close-container
        width: 2.41rem;
        height: 2.41rem;
        position: absolute;
        right: 1rem;
        display: flex;
        align-items: center;
        .icon-close
          background: url(./close_iocn@2x.png) center no-repeat;
          background-size: contain;
          width: 1.1rem;
          height: 1.1rem;
          display: block;
          margin: 0 auto;
    .function-popup-content
      width: 100%;
      height: 13.69rem;
      position: absolute;
      bottom: 0;
      padding: 0 1rem;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      .function-item
        font-size: 0.69rem;
        flex: 0 0 25%;
        box-sizing: border-box;
        display: inline-block;
        padding: 0.6rem;
        .item-container
          border-radius: 10px;
          background: #212221;
          width: 100%;
          height: 100%;
          padding-top: 1rem;
          box-sizing: border-box;
          text-align: center;
          p
            color: #fff;
            padding-top: 0.5rem;
          i
            margin: 0 auto;
          .icon-record
            background: url(./function_browse_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-cart
            background: url(./function_car_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-service
            background: url(./function_pharmacist_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-collect
            background: url(./function_collection_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-search
            background: url(./function_search_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-home
            background: url(./function_home_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
          .icon-news
            background: url(./function_serv_white@2x.png) center no-repeat;
            background-size: contain;
            width: 2rem;
            height: 2rem;
            display: block;
  &.visible
    .function-popup-overlay
      display: block;
    .function-popup-wrapper
      transform: translate3d(0,0,0);
</style>
