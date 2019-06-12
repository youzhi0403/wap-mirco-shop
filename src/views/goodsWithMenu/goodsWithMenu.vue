<template>
    <div class="goodsWithMenu">
      <goods-filter-menu v-on:selectDepartment="selectDepartment" v-on:priceSort="priceSort" v-on:salesSort="salesSort"></goods-filter-menu>
      <goods-list :propOfDiseaseId="diseaseId" :propOfPriceSort="priceSortStatus" :propOfSalesSort="salesSortStatus"></goods-list>
    </div>
</template>

<script>
import GoodsFilterMenu from '../../components/goodsFilterMenu/goodsFilterMenu'
import GoodsList from '../../components/goodsList/goodsList'
export default {
  name: 'goodsWithMenu',
  components: { GoodsList, GoodsFilterMenu },
  data () {
    return {
      salesSortStatus: 'normal',
      priceSortStatus: 'normal',
      diseaseId: ''
    }
  },
  methods: {
    selectDepartment: function (object) {
      this.diseaseId = object.id
    },
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
