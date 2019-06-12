<template>
    <div class="goodsList">
      <ul class="after" v-if="goodsNum > 0">
        <li class="good-item" v-for="(item,index) in goodsList" :key="index">
          <div class="good-img">
            <img :src="item.image">
          </div>
          <div class="good-text">
            <p>{{item.fullname}}</p>
            <p class="good-price"><span class="now">￥{{item.price}}</span><span class="old">￥{{item.marketPrice}}</span></p>
          </div>
          <i class="icon-cart"></i>
        </li>
      </ul>
      <div class="no-content-container" v-else>
          <div class="error-or-empty-img">
          </div>
          <div class="error-or-empty-text">
              暂无搜索结果~
          </div>
      </div>
    </div>
</template>

<script>
import { goodsList } from '../../data/goods/goodsList'

export default {
  name: 'goodsList',
  props: {
    propOfDiseaseId: {
      type: String,
      default () {
        return ''
      }
    },
    propOfPriceSort: {
      type: String,
      default () {
        return 'normal'
      }
    },
    propOfSalesSort: {
      type: String,
      default () {
        return 'normal'
      }
    }
  },
  data () {
    return {
      goodsNum: 0,
      goodsList: []
    }
  },
  created () {
    this.goodsNum = goodsList.data.length
    this.goodsList = goodsList.data

    for (let j = 0, len = this.goodsNum; j < len; j++) {
      if (this.goodsList[j].image === '') {
        this.goodsList[j].image = 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg'
      }
    }
  },
  watch: {
    propOfDiseaseId: function (val, oldVal) {
      if (val !== '') {
        this.goodsList.filter(function (element) {
          if (element.diseaseId === val) {
            return element
          }
        })
      }
    },
    propOfPriceSort: function (val, oldVal) {
      if (val === 'desc') {
        this.goodsList.sort(function (item1, item2) {
          return item2.price - item1.price
        })
      } else if (val === 'asc') {
        this.goodsList.sort(function (item1, item2) {
          return item1.price - item2.price
        })
      }
    },
    propOfSalesSort: function (val, oldVal) {
      if (val === 'desc') {
        this.goodsList.sort(function (item1, item2) {
          return item2.sales - item1.sales
        })
      } else if (val === 'asc') {
        this.goodsList.sort(function (item1, item2) {
          return item1.sales - item2.sales
        })
      }
    }
  }

}
</script>

<style lang="stylus">
.goodsList
  width: 100%;
  padding-top: 3rem;
  max-width: 640px;
  font-family: 'PingFang Medium_1';
  ul
    width: 100%;
    .good-item
      position: relative;
      float: left;
      box-sizing: border-box;
      width: 47%;
      background-color: #fff;
      margin-top: 2%;
      padding: 0.69rem 0;
      border-radius: 5px;
      &:nth-child(odd)
        margin-left: 2%;
        margin-right: 1%;
      &:nth-child(even)
        margin-left: 1%;
        margin-right: 2%;
      .good-img
        width: 85%;
        margin: 0 auto;
        img
          vertical-align: top;
          border: 0;
          display: block;
          max-width: 100%;
      .good-text
        width: 100%;
        font-size: 0.93rem;
        box-sizing: border-box;
        padding-top: 0.55rem;
        p
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 2;
          white-space: normal;
          padding: 0 .5rem;
          text-overflow: ellipsis;
          &:first-child
            height: 3rem;
            overflow: hidden;
        .good-price
          font-family: 'grundig din-medium';
          .now
            color: #FF5722;
            font-size: 1.17rem;
          .old
            text-decoration: line-through;
            color: #9E9E9E;
            font-size: 0.82rem;
            margin-left: 0.2rem;

      .icon-cart
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        width: 2.2rem;
        height: 2.2rem;
        background: url('./car_icon@2x.png') center no-repeat;
        background-size: contain;
  .no-content-container
    .error-or-empty-img
      background: url('./search_empty200.gif') center no-repeat;
      background-size: contain;
      width: 9.24rem;
      height: 10.34rem;
      display: block;
      margin: 4rem auto 0 auto;
    .error-or-empty-text
      width: 100%;
      text-align: center;
      margin-top: 2rem;
      font-family: PingFang;
      font-size: 1.2rem;
      line-height: 1.2rem;
      color: #ababab;
</style>
