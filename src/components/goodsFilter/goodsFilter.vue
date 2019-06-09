<template>
  <div class="goodsFilter">
    <div class="filter-container">
      <div class="filter-item" :class="{active:focusItem === 'item-1'}" @click.stop.prevent="selectItem1">
        综合
      </div>
      <div class="filter-item" :class="{active:focusItem === 'item-2'}" @click.stop.prevent="selectItem2">
        销量
        <i class="icon-up-down" :class="{up:salesSortStatus === 'asc',down:salesSortStatus === 'desc'}"></i>
      </div>
      <div class="filter-item" :class="{active:focusItem === 'item-3'}" @click.stop.prevent="selectItem3">
        价格
        <i class="icon-up-down" :class="{up:priceSortStatus === 'asc',down:priceSortStatus === 'desc'}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsFilter',
  data () {
    return {
      salesSortStatus: 'normal', // normal asc desc
      priceSortStatus: 'normal',
      focusItem: 'item-1'
    }
  },
  methods: {
    selectItem1: function () {
      this.focusItem = 'item-1'
    },
    selectItem2: function () {
      this.focusItem = 'item-2'
      if (this.salesSortStatus === 'normal') {
        this.salesSortStatus = 'asc'
      } else if (this.salesSortStatus === 'asc') {
        this.salesSortStatus = 'desc'
      } else if (this.salesSortStatus === 'desc') {
        this.salesSortStatus = 'normal'
      }
      this.$emit('salesSort', this.salesSortStatus)
    },
    selectItem3: function () {
      this.focusItem = 'item-3'
      if (this.priceSortStatus === 'normal') {
        this.priceSortStatus = 'asc'
      } else if (this.priceSortStatus === 'asc') {
        this.priceSortStatus = 'desc'
      } else if (this.priceSortStatus === 'desc') {
        this.priceSortStatus = 'normal'
      }
      this.$emit('priceSort', this.priceSortStatus)
    }
  }
}
</script>

<style lang="stylus">
.goodsFilter
  position: fixed;
  width: 100%;
  max-width: 640px;
  height: 3rem;
  background-color: #fff;
  z-index: 500;
  font-family: "PingFang Bold_1";
  font-size: 0.96rem;
  .filter-container
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    max-width: 640px;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    line-height: 3rem;
    background-color: #fff;
    .filter-item
      &.active
        color: #FF5722;
        font-weight: bold;
      .icon-up-down
        background: url(./Switch_@2x.png) no-repeat center;
        -webkit-background-size: contain;
        background-size: contain;
        &.up
          background: url(./Switch_up@2x.png) no-repeat center;
          -webkit-background-size: contain;
          background-size: contain;
        &.down
          background: url(./switch_down@2x.png) no-repeat center;
          -webkit-background-size: contain;
          background-size: contain;
    i
      width: 0.6rem;
      height: 0.6rem;
      display: inline-block;
      margin-left: .2rem;
      vertical-align: middle;
</style>
