<template>
    <div class="addressAddPopup" :class="{'visible':visible}">
      <div class="address-add-popup-wrapper">
        <div class="address-add-container">
          <div class="address-add-item">
            <div class="title">联系人</div>
            <div class="item-input-container">
              <input placeholder="请输入联系人姓名" type="text" v-model="name">
            </div>
          </div>
          <div class="address-add-item">
            <div class="title">手机号</div>
            <div class="item-input-container">
              <input placeholder="请输入手机号码" type="number" v-model="telephone">
            </div>
          </div>
          <div class="address-add-item">
            <div class="title">所在地区</div>
            <div class="item-input-container" @click.stop.prevent="showAddressPicker">
              <input placeholder="请选择地址" type="text" v-model="region" readonly>
            </div>
          </div>
          <div class="address-add-item-textarea">
            <div class="title">详细地址</div>
            <div class="item-textarea-container">
              <textarea name="address" placeholder="请输入详细地址，为确保您的物品不会丢失" v-model="address"></textarea>
            </div>
          </div>
        </div>
        <div class="address-add-default">
          <i class="icon-default"></i>
          <div class="text">
            设置为默认收货地址
          </div>
        </div>
        <div class="address-add-button">
          确定
        </div>
        <div class="address-cancel-button" @click.stop.prevent="hideAddressAddPopup">
          取消
        </div>
      </div>
    </div>
</template>
<script>
import { provinceList, cityList, areaList } from './area'

const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})
export default {
  name: 'addressAddPopup',
  data () {
    return {
      visible: false,
      name: '',
      telephone: '',
      region: '',
      address: ''
    }
  },
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: 'City Picker',
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showAddressAddPopup: function () {
      this.visible = true
    },
    hideAddressAddPopup: function () {
      this.visible = false
    },
    showAddressPicker: function () {
      console.log('123')
      this.addressPicker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      this.region = selectedText
    },
    cancelHandle () {
    }
  }
}
</script>

<style lang="stylus">
.addressAddPopup
  .address-add-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,100%,0);
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
    bottom: 0;
    z-index: 99;
    background: #f6f6f6;
    .address-add-container
      background: #fff;
      margin-top: 0.69rem;
      margin-bottom: 1rem;
      .address-add-item
        width: 100%;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.1rem;
        border-bottom: 1px solid #e5e5e5;
        .title
          width: 20%;
          height: 4rem;
          float: left;
          text-align: left;
          padding-left: 1.34rem;
        .item-input-container
          width: 65%;
          height: 4rem;
          float: left;
          text-indent: 1rem;
          input
            border: none;
            outline: none;
            width: 90%;
            font-size: 1.1rem;
            line-height: 1.1rem;
            caret-color: #FF5722;
      .address-add-item-textarea
        padding-bottom: 1.5rem;
        .title
          height: 4rem;
          line-height: 4rem;
          font-size: 1.1rem;
          text-align: left;
          padding-left: 1.34rem;
        .item-textarea-container
          textarea
            border: none;
            outline: none;
            font-size: 1.1rem;
            width: 80%;
            margin: 0 1.5rem;
            resize: none;
            font-family: "PingFang";
            caret-color: #FF5722;
    .address-add-default
      position: relative;
      width: 50%;
      margin: 0 auto;
      text-align: center;
      font-size: 1rem;
      color: #9b9b9b;
      .icon-default
        width: 1rem;
        height: 1rem;
        background: url(./choose_gray@2x.png) center no-repeat;
        background-size: contain;
        position: absolute;
        left: 0.2rem;
        top: 19%;
        &.active
          background: url(./choose_red@2x.png) center no-repeat;
          background-size: contain;
    .address-add-button
      width: 20.63rem;
      height: 3.17rem;
      line-height: 3.17rem;
      font-size: 1.03rem;
      color: #fffefe;
      border-radius: 3.17rem;
      margin: 3.45rem auto 0 auto;
      background: #9b9b9b;
      text-align: center;
      &.active
        background: linear-gradient(to right,#FF8300,#FF5700);
    .address-cancel-button
      width: 20.63rem;
      height: 3.17rem;
      line-height: 3.17rem;
      font-size: 1.03rem;
      color: #fffefe;
      border-radius: 3.17rem;
      margin: 1.5rem auto 0 auto;
      background: linear-gradient(to right,#FF8300,#FF5700);
      text-align: center;
  &.visible
    .address-add-popup-wrapper
      transform: translate3d(0,0,0);
</style>
