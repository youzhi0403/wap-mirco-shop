<template>
    <div class="recordPopup" :class="{'visible':visible}">
      <div class="record-popup-overlay" @click.stop.prevent="hideRecordPopup">
      </div>
      <div class="record-popup-wrapper">
        <div class="record-popup-title">
          <span></span>
          <span class="text">浏览记录</span>
          <span></span>
        </div>
        <div class="record-popup-content">
          <div class="record-item">
            <div class="record-item-image">
              <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg" />
            </div>
            <div class="record-item-text">
              <p class="name">感冒灵颗粒10g感冒灵颗粒10g</p>
              <p class="price">￥99.00</p>
            </div>
          </div>
          <div class="record-item">
            <div class="record-item-image">
              <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg" />
            </div>
            <div class="record-item-text">
              <p class="name">感冒灵颗粒10g感冒灵颗粒10g</p>
              <p class="price">￥99.00</p>
            </div>
          </div>
          <div class="record-item">
            <div class="record-item-image">
              <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg" />
            </div>
            <div class="record-item-text">
              <p class="name">感冒灵颗粒10g感冒灵颗粒10g</p>
              <p class="price">￥99.00</p>
            </div>
          </div>
          <div class="record-item">
            <div class="record-item-image">
              <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg" />
            </div>
            <div class="record-item-text">
              <p class="name">感冒灵颗粒10g感冒灵颗粒10g</p>
              <p class="price">￥99.00</p>
            </div>
          </div>
          <div class="record-item">
            <div class="record-item-image">
              <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg" />
            </div>
            <div class="record-item-text">
              <p class="name">感冒灵颗粒10g感冒灵颗粒10g</p>
              <p class="price">￥99.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'recordPopup',
  props: {
    propOfVisible: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showRecordPopup: function () {
      this.visible = true
    },
    hideRecordPopup: function () {
      let _this = this
      this.visible = false
      setTimeout(function () {
        _this.$emit('close')
      }, 400)
    }
  },
  created () {
    this.visible = this.propOfVisible
  }
}
</script>

<style lang="stylus">
.recordPopup
  .record-popup-overlay
    z-index: 199;
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
    background: #000000;
    opacity: 0.65;
    transform: translate3d(-50%, 0, 0);
    left: 50%;
    display: none;
  .record-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(100%,0,0);
    width: 35%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 200;
    font-family: "PingFang Medium_1";
    max-width: 224px;
    .record-popup-title
      width: 100%;
      height: 6%;
      top: 0;
      right: 0;
      background: #fff;
      box-sizing: border-box;
      position: absolute;
      font-size: 0.82rem;
      color: #666666;
      padding: 0.7rem 0.27rem 0.5rem 0.27rem;
      margin: 0 auto;
      text-align: center;
      .text
        margin: 0 0.27rem;
      span
        &:nth-child(odd)
          width: 20%;
          border-top: 1px solid #666666;
          display: inline-block;
          vertical-align: middle;
          opacity: 0.2;
    .record-popup-content
      width: 100%;
      height: 94%;
      position: absolute;
      right: 0;
      bottom: 0;
      background: #fff;
      padding: 0 1.38rem;
      box-sizing: border-box;
      overflow: scroll;
      .record-item
        &:not(:last-child)
          margin-bottom: 0.8rem;
        .record-item-image
          width: 100%;
          img
            width: 100%;
        .record-item-text
          font-size: 0.69rem;
          color: #1a1a1a;
          line-height: 20px;
          .name
            padding-top: 0.3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
  &.visible
    .record-popup-overlay
      display: block;
    .record-popup-wrapper
      transform: translate3d(0,0,0);
</style>
