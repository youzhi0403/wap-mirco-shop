<template>
  <popup class="deliveryPopup" ref="deliveryPopup">
    <template slot="title">
      配送方式
    </template>
    <template slot="content">
      <cube-radio-group>
        <div class="radio-item" v-for="(item,index) in deliveryItems" :key="index">
          <cube-radio :option="item" position="right">
            <p>{{item.label}}</p>
          </cube-radio>
          <cube-radio-group v-if="item.children" class="group-level-2">
            <cube-radio v-for="(item2,index2) in item.children" :key="index2" :option="item2" position="right">{{item2.label}}</cube-radio>
          </cube-radio-group>
        </div>
      </cube-radio-group>
    </template>
  </popup>
</template>

<script>
import Popup from '../popup/popup'
export default {
  name: 'deliveryPopup',
  components: { Popup },
  data () {
    return {
      selectedOne: '',
      selectedTwo: '',
      optionOne: '',
      optionTwo: '',
      deliveryItems: [
        {
          label: '快速配送',
          value: '快速配送',
          children: [
            {
              label: '全场58包邮',
              value: '全场58包邮'
            },
            {
              label: '5元邮费券',
              value: '5元邮费券'
            }
          ]
        },
        {
          label: '到店自提',
          value: '到店自提'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    showDeliveryPopup: function () {
      this.$refs['deliveryPopup'].show()
    }
  }
}
</script>

<style lang="stylus">
.popup-content
  .cube-radio-group
    background: #f6f6f6;
  .radio-item
    .border-bottom-1px
      &:after
        border: 0;
    .border-top-1px
      &:before
        border: 0;
  .group-level-2
    .cube-radio
      padding: 10px 15px 10px 31px;
</style>
