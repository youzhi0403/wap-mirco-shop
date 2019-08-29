<template>
    <popup class="fanxingouPopup" ref="fanxingouPopup">
      <template slot="title">
        服务
      </template>
      <template slot="content">
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-authentic"></i>
          </div>
          <div class="item-right">
            <p class="title">正品保证</p>
            <p class="content">好万家是全国首批国家食药监局的合法网上药店，专供正规厂家优质药品</p>
          </div>
        </div>
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-privacy"></i>
          </div>
          <div class="item-right">
            <p class="title">隐私配送</p>
            <p class="content">购物无忧，隐私配色，您在好万家上药店注册时产生的所有个人信息将被保密，快递包装上也不会出现您的购物内容</p>
          </div>
        </div>
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-fast"></i>
          </div>
          <div class="item-right">
            <p class="title">快速审核</p>
            <p class="content">专人快速处理审核</p>
          </div>
        </div>
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-since"></i>
          </div>
          <div class="item-right">
            <p class="title">门店自提</p>
            <p class="content">可以自行到我们的线下门店提货</p>
          </div>
        </div>
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-pharmacist"></i>
          </div>
          <div class="item-right">
            <p class="title">药师服务</p>
            <p class="content">为您提供专业的药师解答及搭配建议</p>
          </div>
        </div>
        <div class="fanxingou-item">
          <div class="item-left">
            <i class="icon-shop"></i>
          </div>
          <div class="item-right">
            <p class="title">实体连锁</p>
            <p class="content">好万家线下有众多实体连锁大药房，为您提供更加优质的线下体验</p>
          </div>
        </div>
      </template>
    </popup>
</template>

<script>
import Popup from '../popup/popup'
export default {
  name: 'fanxingouPopup',
  components: { Popup },
  methods: {
    showFanxingouPopup: function () {
      this.$refs['fanxingouPopup'].show()
    }
  }
}
</script>

<style lang="stylus">
.fanxingouPopup
  .fanxingou-item
    padding: 0.5rem 1.55rem 0 1.55rem;
    display: flex;
    .item-left
      flex-basis: 3rem;
      padding-top: 0.3rem;
      .icon-authentic
        background: url(./authentic_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
      .icon-privacy
        background: url(./privacy_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
      .icon-fast
        background: url(./fast_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
      .icon-since
        background: url(./since_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
      .icon-pharmacist
        background: url(./pharmacist_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
      .icon-shop
        background: url(./shop_icon@2x.png);
        background-size: contain;
        width: 1.03rem;
        height: 1.03rem;
        display: block;
    .item-right
      flex: 1;
      padding-bottom: 0.5rem;
      line-height: 1.6rem;
      border-bottom: 1px solid #f6f6f6;
      .title
        font-size: 1rem;
        color: #1a1a1a;
        font-family: 'PingFang Bold_1';
      .content
        font-size: 1rem;
        color: #666666;
</style>
