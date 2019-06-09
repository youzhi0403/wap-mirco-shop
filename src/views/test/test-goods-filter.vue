<template>
  <div class="test">
    <goods-filter v-on:priceSort="priceSort" v-on:salesSort="salesSort"></goods-filter>
  </div>
</template>

<script>
import GoodsFilter from '../../components/goodsFilter/goodsFilter'
export default {
  name: 'test',
  components: { GoodsFilter },
  methods: {
    priceSort: function (status) {
      console.log('priceSortStatus：' + status)
    },
    salesSort: function (status) {
      console.log('salesStatus：' + status)
    }
  }
}
</script>

<style lang="stylus">

</style>
