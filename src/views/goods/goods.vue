<template>
    <div class="goods">
      <goods-filter v-on:priceSort="priceSort" v-on:salesSort="salesSort"></goods-filter>
      <goods-list :propOfDiseaseId="diseaseId" :propOfPriceSort="priceSortStatus" :propOfSalesSort="salesSortStatus"></goods-list>
    </div>
</template>

<script>
import GoodsFilter from '../../components/goodsFilter/goodsFilter'
import GoodsList from '../../components/goodsList/goodsList'
export default {
  name: 'goods',
  components: { GoodsList, GoodsFilter },
  data () {
    return {
      salesSortStatus: 'normal',
      priceSortStatus: 'normal',
      diseaseId: ''
    }
  },
  methods: {
    priceSort: function (status) {
      this.priceSortStatus = status
    },
    salesSort: function (status) {
      this.salesSortStatus = status
    }
  }
}
</script>

<style lang="stylus">

</style>
