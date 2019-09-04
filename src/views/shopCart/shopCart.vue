<template>
    <div class="shopCart">
      购物车待开发
      <!--购物车商品-->
      <div class="shopcart-goods-container">
        <div class="shopcart-goods-title">
          <div class="goods-title-left">共<label>118</label>件商品</div>
          <div class="goods-title-right"><a>领券</a></div>
        </div>
        <div class="shopcart-goods-items">
          <div class="goods-item-wrapper">
            <cube-scroll>
              <cube-swipe>
                <cube-checkbox-group v-model="checkList">
                  <transition-group name="swipe" tag="ul">
                    <li v-for="(item,index) in shopCartGoods" :key="index" class="li-item">
                      <cube-swipe-item
                        ref="swipeItem"
                        :btns="item.btns"
                        :index="index"
                        @btn-click="onBtnClick"
                      >
                        <div class="shopcart-goods-item">
                          <div class="item-checkbox">
                            <cube-checkbox class="with-click" v-model="item.goodsItem.checked" :option="{value:item.goodsItem.id,disabled:item.goodsItem.soldOut || item.goodsItem.shelves}">
                              <a href="javascript:;" @click.prevent="selectCheckbox"></a>
                            </cube-checkbox>
                          </div>
                          <div class="item-image">
                            <img :src="item.goodsItem.img">
                            <i class="icon-sold-out" v-if="item.goodsItem.soldOut"></i>
                            <i class="icon-shelves" v-if="item.goodsItem.shelves"></i>
                          </div>
                          <div class="item-detail">
                            <p class="item-detail-name">
                              <span v-if="item.goodsItem.combination">{{item.goodsItem.combinations.name}}</span>
                              {{item.goodsItem.name}}
                            </p>
                            <p class="item-detail-specification">规格: {{item.goodsItem.specification}}</p>
                            <p class="item-detail-price">￥{{item.goodsItem.price}}</p>

                            <a class="item-detail-recommend-button" v-if="item.goodsItem.soldOut || item.goodsItem.shelves">
                              药师推荐
                            </a>
                            <div class="item-quantity" v-else>
                              <span class="quantity-sub">-</span>
                              <input type="number" v-model="item.goodsItem.goodsNumber">
                              <span class="quantity-add">+</span>
                            </div>
                          </div>
                        </div>
                      </cube-swipe-item>
                      <div class="goods-item-combo" v-if="item.goodsItem.combination">
                        <div class="combo-arrow"></div>
                        <p class="combo-title">{{item.goodsItem.combinations.name}}</p>
                        <p class="combo-item" v-for="(combinationItem,combinationIndex) in item.goodsItem.combinations.arr" :key="combinationIndex">{{combinationItem.name}}<span>x{{combinationItem.num}}</span></p>
                      </div>
                    </li>
                  </transition-group>
                </cube-checkbox-group>
              </cube-swipe>
            </cube-scroll>
          </div>
        </div>
        <div class="shopcart-goods-recommend">
          <div class="recommend-title">
            <i class="icon-recommend"></i>
            <span>药师推荐</span>
            <i class="icon-recommend"></i>
          </div>
          <div class="recommend-content">
            <goods-list></goods-list>
          </div>
        </div>
      </div>
      <!--购物车操作-->
      <div class="shopcart-operator">
        <div class="operator-left">
          <div class="operator-checkbox" @click.stop.prevent="selectOrCancelAll">
            <cube-checkbox v-model="allChecked" :option="allCheckedOption"></cube-checkbox>
            <span>全选</span>
          </div>
          <!-- 删除按钮-->
          <a class="operator-delete-button">删除</a>
        </div>
        <div class="operator-right">
          <span class="operator-right-all">总计:<span class="price">￥0</span></span>
          <a class="operator-right-button">结算(<label>0</label>)</a>
        </div>
      </div>
    </div>
</template>

<script>
import GoodsList from '../../components/goodsList/goodsList'
export default {
  name: 'shopCart',
  components: { GoodsList },
  data () {
    return {
      /* 导航名称 */
      navName: 'shopCart',
      checkList: [],
      /* 全选的选项 */
      allChecked: false,
      allCheckedOption: {
        value: 'allChecked'
      },
      shopCartGoods: [],
      /* 全选功能 */
      allSelect: false,
      allCancel: false
    }
  },
  props: {
    /* 购物车商品 */
    propOfShopCartGoods: {
      type: Array,
      default: function () {
        return [
          {
            goodsItem: {
              id: '1',
              /* 是否有套餐组合 */
              combination: true,
              combinations: {
                name: '补肾加强调理套餐',
                arr: [
                  {
                    name: '中化 头孢拉定胶囊 0.25g*24s',
                    num: 1
                  },
                  {
                    name: '艾锐 头孢拉定胶囊头孢拉定胶囊 3片*1般',
                    num: 2
                  },
                  {
                    name: '拜耳 阿司匹林长溶片 100mg*30片',
                    num: 1
                  }
                ]
              },
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]

          },
          {
            goodsItem: {
              id: '2',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]
          },
          {
            goodsItem: {
              id: '3',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: true,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]
          },
          {
            goodsItem: {
              id: '4',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: true,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]

          },
          {
            goodsItem: {
              id: '5',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]

          },
          {
            goodsItem: {
              id: '6',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]

          },
          {
            goodsItem: {
              id: '7',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]

          },
          {
            goodsItem: {
              id: '8',
              /* 是否有套餐组合 */
              combination: false,
              /* 是否无货 */
              soldOut: false,
              /* 是否下架 */
              shelves: false,
              name: '乐天 补肺丸(乐天) 9g*10丸*4板',
              specification: '9g*10丸*4板',
              price: '278.00',
              goodsNumber: 1,
              img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
              checked: false
            },
            btns: [
              {
                action: 'collect',
                text: '移入收藏',
                color: '#FF8400'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#FF5A00'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    onBtnClick: function () {

    },
    selectOrCancelAll: function () {
      if (this.allChecked) {
        this.shopCartGoods.filter((item) => {
          item.goodsItem.checked = false
        })
      } else {
        this.shopCartGoods.filter((item) => {
          item.goodsItem.checked = true
        })
      }
      this.allChecked = !this.allChecked
    },
    selectCheckbox: function () {
      this.allSelect = true
      this.allCancel = true
      this.shopCartGoods.filter((item) => {
        if (item.goodsItem.checked) {
          this.allCancel = false
        } else {
          this.allSelect = false
        }
      })
      console.log(this.allSelect)
      console.log(this.allCancel)
      if (this.allCancel) {
        this.allChecked = false
      }
      if (this.allSelect) {
        this.allChecked = true
      }
    }
  },
  created () {
    this.shopCartGoods = this.propOfShopCartGoods
  }

}
</script>

<style lang="stylus">
.shopCart
  .shopcart-goods-container
    position: absolute;
    top: 0rem;
    width: 100%;
    max-width: 640px;
    min-height: 90%;
    font-family: 'PingFang Medium_1';
    .shopcart-goods-title
      width: 100%;
      height: 2.93rem;
      line-height: 2.93rem;
      background: #fff;
      .goods-title-left
        float: left;
        padding-left: 0.82rem;
        font-size: 0.86rem;
        color: #313131;
        label
          cursor: pointer;
      .goods-title-right
        float: right;
        padding-right: 0.69rem;
        font-size: 0.69rem;
        font-family: 'PingFang Bold_1';
        a
          width: 2.41rem;
          height: 1.03rem;
          border-radius: 4px;
          border: 1px solid #ff5a00;
          color: #ff5a00;
          padding: 0.17rem 0.51rem;

    .shopcart-goods-items
      width: 100%;
      background-color: #fff;
      padding-bottom: 2rem;
      padding-top: 0.2rem;
      .goods-item-wrapper
        ul
          .li-item
            .cube-swipe-item
              .shopcart-goods-item
                width: 100%;
                height: 6.34rem;
                display: flex;
                position: relative;
                .item-checkbox
                  width: 3rem;
                  flex-basis: 3rem;
                  align-self: center;
                  text-align: center;
                  .with-click
                    .cube-checkbox-label
                      a
                        position: relative;
                        z-index: 1;
                .item-image
                  width: 6.34rem;
                  flex-basis: 6.34rem;
                  border: 1px solid #eee;
                  position: relative;
                  img
                    width: 85%;
                    height: 85%;
                    vertical-align: middle;
                    position: absolute;
                    top: 7.5%;
                    left: 7.5%;
                    z-index: 9;
                  i
                    width: 85%;
                    height: 85%;
                    vertical-align: middle;
                    position: absolute;
                    top: 7.5%;
                    left: 7.5%;
                    z-index: 10;
                  .icon-sold-out
                    background: url(./soldout_icon@2x.png) center no-repeat;
                    background-size: contain;
                  .icon-shelves
                    background: url(./shelves_icon@2x.png) center no-repeat;
                    background-size: contain;
                .item-detail
                  position: relative;
                  display: inline-block;
                  margin-left: 0.86rem;
                  flex: 1;
                  .item-detail-name
                    font-size: 0.89rem;
                    color: #313131;
                    line-height: 1.6rem;
                    span
                      font-size: 0.69rem;
                      line-height: 1.4rem;
                      color: #ff5900;
                      background-color: #FFEEE5;
                      padding-right: 0.2rem;
                      padding-left: 0.2rem;
                      display: inline-block;
                      font-family: 'PingFang Bold_1';
                  .item-detail-specification
                    font-size: 0.82rem;
                    color: #8d8d8d;
                  .item-detail-price
                    font-size: 1.03rem;
                    color: #f1002d;
                    bottom: 0;
                    position: absolute;
                    font-family: 'grundig din-medium';
                  .item-quantity
                    position: absolute;
                    right: 0.69rem;
                    bottom: 0;
                    border: 1px solid #eee;
                    border-radius: 2px;
                    height: 1.86rem;
                    width: 6.5rem;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    span
                      width: 1.86rem;
                      height: 100%;
                      display: inline-block;
                      text-align: center;
                      font-size: 1.2rem;
                      font-weight: bold;
                      box-sizing: border-box;
                      line-height: 1.6rem;
                    input
                      width: 2.76rem;
                      height: 1.86rem;
                      border-left: 1px solid #eee;
                      text-align: center;
                      border-right: 1px solid #eee;
                      font-family: 'grundig din-medium';
                      caret-color: #FF5722;
                      box-sizing: border-box;
                      display: inline-block;
                  .item-detail-recommend-button
                    position: absolute;
                    right: 0.69rem;
                    bottom: 0;
                    width: 5.2rem;
                    height: 1.69rem;
                    border-radius: 1.69rem;
                    line-height: 1.69rem;
                    text-align: center;
                    font-size: 0.89rem;
                    color: #ff5900;
                    border: 1px solid #ff5900;
            .goods-item-combo
              width: 86%;
              margin-left: 3rem;
              margin-right: 0.65rem;
              background: #f6f6f6;
              margin-top: 1.25rem;
              padding-bottom: 0.58rem;
              position: relative;
              .combo-arrow
                position: absolute;
                width: 1.4rem;
                height: 1.4rem;
                top: -0.8rem;
                left: 1.82rem;
                background: #f6f6f6;
                z-index: 1;
                transform: rotate(45deg);
              .combo-title
                font-size: 0.82rem;
                color: #313131;
                line-height: 2.2rem;
                font-weight: bold;
                margin-left: 0.69rem;
                position: relative;
                z-index: 10;
                font-family: 'PingFang Bold_1';
              .combo-item
                font-size: 0.82rem;
                line-height: 0.82rem;
                color: #8d8d8d;
                margin-left: 1.48rem;
                margin-bottom: 0.41rem;
                position: relative;
                box-sizing: border-box;
                padding-right: 2rem;
                span
                  position: absolute;
                  right: 0.5rem;
                  top: 0;
                  color: #313131;
                  font-weight: bold;
            &:not(:first-child)
              padding-top: 1.5rem;
    .shopcart-goods-recommend
      width: 100%;
      background-color: #f6f6f6;
      margin-bottom: 4rem;
      .recommend-title
        margin: 0 auto;
        text-align: center;
        padding: 1.72rem 0.69rem 1.2rem 0.69rem;
        .icon-recommend
          background: url(./recommend_icon@2x.png) center no-repeat;
          background-size: contain;
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
        span
          font-size: 1.2rem;
          color: black;
          display: inline-block;
          margin: 0 0.69rem;
      .recommend-content
        .goodsList
          padding-top: 0;
  .shopcart-operator
    position: fixed;
    bottom: 0;
    height: 3.5rem;
    width: 100%;
    max-width: 640px;
    line-height: 3.5rem;
    background: #fff;
    z-index: 100;
    box-shadow: 0 8px 30px grey;
    .operator-left
      width: 10rem;
      float: left;
      font-size: 1.1rem;
      .operator-checkbox
        display: inline-block;
        margin-left: 0.36rem;
        margin-right: 0.82rem;
        .cube-checkbox
          padding-right: 7px;
          display:inline-block;
    .operator-right
      float: right;
      margin-right: 0.82rem;
      .operator-right-all
        display: inline-block;
        font-size: 0.96rem;
        color: #313131;
        font-family: 'PingFang Bold_1';
        .price
          font-size: 1.03rem;
          color: #f1002d;
          font-family: 'grundig din-medium';
      .operator-right-button
        display: inline-block;
        width: 6rem;
        height: 2.6rem;
        line-height: 2.6rem;
        margin-left: 0.82rem;
        background: linear-gradient(to right, #FD9B31 , #FD5900);
        text-align: center;
        border-radius: 5px;
        font-size: 1rem;
        color: #fff;
        letter-spacing: 2px;
</style>
