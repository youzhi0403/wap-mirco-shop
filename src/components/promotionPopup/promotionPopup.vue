<template>
  <popup class="promotionPopup" ref="popup">
    <template slot="title">
      促销
    </template>
    <template slot="content">
      <div class="sales-item" >
        <div class="item-left" v-show="propOfPromotions.immediate_discount">
          <span>立减</span>
        </div>
        <div class="item-right">
          {{propOfPromotions.immediate_discount}}
        </div>
      </div>
      <div class="sales-item" v-show="propOfPromotions.free_shipping">
        <div class="item-left">
          <span>免邮</span>
        </div>
        <div class="item-right">
          {{propOfPromotions.free_shipping}}
        </div>
      </div>
      <div class="sales-item" v-show="propOfPromotions.discount">
        <div class="item-left">
          <span>折扣</span>
        </div>
        <div class="item-right">
          {{propOfPromotions.discount}}
        </div>
      </div>
      <div class="sales-item" v-show="propOfPromotions.full_return">
        <div class="item-left">
          <span>满返</span>
        </div>
        <div class="item-right">
          {{propOfPromotions.full_return}}
        </div>
      </div>
    </template>
  </popup>
</template>

<script>
import Popup from '../popup/popup'
export default {
  name: 'promotionPopup',
  components: { Popup },
  props: {
    propOfPromotions: {
      type: Object,
      default: function () {
        return {
          immediate_discount: '首单随机立减',
          free_shipping: '全场满58元免运费',
          discount: '全场9.8折',
          full_return: '2月15日--5月8日期间购买保健品品类满1元即可返生活用品300减50券和128减20券'
        }
      }
    }
  },
  data () {
    return {
      popupStatus: false
    }
  },
  methods: {
    showPopup: function () {
      this.$refs['popup'].show()
    }
  }
}
</script>

<style lang="stylus">
.promotionPopup
  .sales-item
    padding: 1.34rem 1.7rem 1.34rem 1.03rem;
    display: flex;
    .item-left
      flex-basis: 3rem;
      span
        font-size: 0.69rem;
        color: #ff5900;
        background: #FFEEE5;
        padding: 0.2rem;
    .item-right
      line-height: 1.8rem;
      font-size: 0.96rem;
      flex: 1;
</style>
