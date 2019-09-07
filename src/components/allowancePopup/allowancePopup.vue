<template>
    <popup class="allowancePopup" ref="allowancePopup">
      <template slot="title">
        优惠券
      </template>
      <template slot="content">
        <cube-radio-group>
          <cube-radio v-model="allowanceSelect" v-for="(item,index) in allowanceOption" :key="index" :option="item" position="right"></cube-radio>
        </cube-radio-group>
      </template>
    </popup>
</template>

<script>
import Popup from '../popup/popup'
export default {
  name: 'allowancePopup',
  components: { Popup },
  data () {
    return {
      allowanceSelect: '',
      allowanceOption: [
        {
          label: '20元优惠券：满359减20',
          value: '20元优惠券：满359减20'
        },
        {
          label: '30元优惠券：满359减20',
          value: '30元优惠券：满359减20'
        },
        {
          label: '40元优惠券：满359减20',
          value: '40元优惠券：满359减20'
        },
        {
          label: '50元优惠券：满359减20',
          value: '50元优惠券：满359减20'
        }
      ]
    }
  },
  methods: {
    showAllowancePopup: function () {
      this.$refs['allowancePopup'].show()
    }
  }
}
</script>

<style lang="stylus">
.popup-content
  .cube-radio
    padding: 10px 15px;
    height: 3.1rem;
    line-height: 3.1rem;
    font-size: 1.2rem;
</style>
