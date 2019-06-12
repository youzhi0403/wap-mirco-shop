<template>
    <div class="test-goods-filter-menu">
      <goods-filter-menu v-on:selectDepartment="selectDepartment" v-on:priceSort="priceSort" v-on:salesSort="salesSort"></goods-filter-menu>
    </div>
</template>

<script>
import GoodsFilterMenu from '../../../components/goodsFilterMenu/goodsFilterMenu'
export default {
  name: 'test-goods-filter-menu',
  components: { GoodsFilterMenu },
  created () {

  },
  methods: {
    selectDepartment: function (object) {
      console.log(object)
    },
    priceSort: function (object) {
      console.log(object)
    },
    salesSort: function (object) {
      console.log(object)
    }
  }
}
</script>

<style lang="stylus">

</style>
