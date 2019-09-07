<template>
    <div class="addressPopup" :class="{'visible':visible}">
      <div class="address-popup-wrapper">
        <div class="address-container">
          <div class="address-button-add" @click.stop.prevent="showAddressAddPopup">
            <i class="i-add">+</i>
            <a>添加一个新地址</a>
          </div>
          <div class="address-item-container">
            <a class="address-item default">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
                <span class="default">默认</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
            <a class="address-item">
              <div class="first-line">
                <span class="name">赵敏敏</span>
                <span class="phone">15989026269</span>
              </div>
              <div class="address">
                广东省普宁市流沙街道体育馆西小区39栋好王家大药房C1903
              </div>
            </a>
          </div>

        </div>
      </div>
      <div class="cancel-button" @click.stop.prevent="hideAddressAddPopup">
        取消
      </div>

      <address-add-popup ref="addressAddPopup"></address-add-popup>
    </div>
</template>

<script>
import AddressAddPopup from '../addressAddPopup/addressAddPopup'
export default {
  name: 'addressPopup',
  components: { AddressAddPopup },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showAddressPopup: function () {
      this.visible = true
    },
    hideAddressAddPopup: function () {
      this.visible = false
    },
    showAddressAddPopup: function () {
      this.$refs['addressAddPopup'].showAddressAddPopup()
    }
  }
}
</script>

<style lang="stylus">
.addressPopup
  .address-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,107%,0);
    width: 100%;
    height: 93%;
    position: fixed;
    max-width: 640px;
    bottom: 3.27rem;
    z-index: 98;
    background: #f6f6f6;
    overflow: auto;
    .address-container
      width: 95%;
      background: #f6f6f6;
      padding: 0.69rem 0;
      margin: 0 auto;
      .address-button-add
        width: 18rem;
        height: 3.1rem;
        margin: 1.03rem auto;
        border: 1px solid #ff5900;
        font-size: 0.89rem;
        color: #ff5900;
        display: flex;
        align-items: center;
        justify-content: center;
        i
          font-size: 1.5rem;
        a
          text-align: left;
          box-sizing: border-box;
          padding-left: 0.4rem;
          color: #ff5900;
    .address-item-container
      .address-item
        margin-top: 0.69rem;
        background: #fff;
        width: 100%;
        height: 7.93rem;
        padding-right: 3.45rem;
        padding-left: 1.03rem;
        position: relative;
        box-sizing: border-box;
        border-radius: 10px !important;
        display: block;
        &.default
          border-image: url(./address_line@2x.png) 30 30 stretch;
          border-top: 0.4rem solid transparent;
        .first-line
          font-size: 1.03rem;
          color: #000000;
          padding-top: 1.38rem;
          .name
            display: inline-block;
          .phone
            float: right;
            display: inline-block;
            margin-left: 0.2rem;
          .default
            font-size: 0.49rem;
            color: #fff;
            padding: 0 0.3rem;
            background: #ff5900;
            display: inline-block;
            float: right;
            border-radius: 5px;
        .address
          font-size: 0.89rem;
          color: #313131;
          line-height: 1.2rem;
          margin-top: 0.69rem;
  .cancel-button
    position: fixed;
    max-width: 640px;
    bottom: 0;
    height: 7%;
    color: #313131;
    border-top: 0.17rem solid #8d8d8d;
    width: 100%;
    background: #fff;
    z-index: 98;
    transform: translate3d(0,100%,0);
    transition-property: transform;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  &.visible
    .address-popup-wrapper
      transform: translate3d(0,0,0);
    .cancel-button
      transform: translate3d(0,0,0);
</style>
