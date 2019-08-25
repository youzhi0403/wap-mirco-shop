<template>
    <div class="goodDetail">
      <!--第一部分-->
      <div class="goodDetail-partOne">
        <div class="slide-container">
          <cube-slide>
            <cube-slide-item v-for="(item,index) in propOfGood.imgs" :key="index">
              <img :src="item">
            </cube-slide-item>
            <template slot="dots" slot-scope="props">
              <div class="pagination">
                <span class="pagination-current">{{props.current+1}}</span>
                /
                <span class="pagination-total">{{propOfGood.imgs.length}}</span>
              </div>
            </template>
          </cube-slide>
          <i class="icon-otc"></i>
          <i class="icon-play"></i>
        </div>
        <div class="seckill" v-show="propOfGood.seckill">
          <div class="seckill-left">
            <div class="seckill-left-partOne">
              <span class="now">
                <div>￥</div>
                <div class="big">
                  {{propOfGood.price.substring(0,propOfGood.price.indexOf('.')==-1 ? propOfGood.price.length : propOfGood.price.indexOf('.'))}}
                </div>
                <div>
                  {{propOfGood.price.indexOf('.')==-1 ? '' : propOfGood.price.substring(propOfGood.price.indexOf('.'))}}
                </div>
              </span>
            </div>
            <div class="seckill-left-partTwo">
              <span class="old">原价<span>￥{{propOfGood.oldPrice}}</span></span>
              <p>限时秒杀</p>
            </div>
            <div class="seckill-left-partThree">
              <span class="num">已售{{propOfGood.sellCount}}件</span>
            </div>
          </div>
          <div class="seckill-right">
            <span>13</span>:<span>42</span>:<span>50</span>
            <p>距结束还剩:</p>
          </div>
        </div>
        <div class="no-seckill" v-show="!propOfGood.seckill">
          <span class="now">
            ￥
            <span class="big">
              {{propOfGood.price.substring(0,propOfGood.price.indexOf('.')==-1 ? propOfGood.price.length : propOfGood.price.indexOf('.'))}}
            </span>
            {{propOfGood.price.indexOf('.')==-1 ? '' : propOfGood.price.substring(propOfGood.price.indexOf('.'))}}
          </span>
          <span class="old">原价<span>￥{{propOfGood.oldPrice}}</span></span>
          <span class="num">已售{{propOfGood.sellCount}}件</span>
        </div>
        <div class="goodDetail-name">
          {{propOfGood.fullName}}
        </div>
      </div>

      <!--第二部分-->
      <div class="goodDetail-partTwo">
        <div class="partTwo-item line">
          <div class="item-title">功能主治</div>
          <div class="item-content"><p>治疗轻、中度高血压，对重度高血压可与其他降压药合用。</p></div>
        </div>

        <div class="partTwo-item">
          <div class="item-title">生产厂家</div>
          <div class="item-content">
            <p>华润双鹤药业股份有限公司</p>
            <p class="item-content-tip">厂家不定时换包装，具体以实物为准</p>
          </div>
        </div>
      </div>

      <!--第三部分-->
      <div class="goodDetail-partThree">
        <div class="partThree-title">
          可享受以下优惠
          <i class="icon-title"></i>
        </div>
        <div class="partThree-item line">
          <div class="item-title">
            促销
          </div>
          <div class="item-content">
            <p><span class="sign-text">立减</span>首单随即立减</p>
            <p><span class="sign-text">免邮</span>全场满58免运费</p>
            <i class="icon-more" id="randomSalesSelector"></i>
          </div>
        </div>
        <div class="partThree-item">
          <div class="item-title">优惠</div>
          <div class="item-content">
            <p>
              <span class="coupon-bg">
                满499减30
                <span class="top-trangle"></span>
                <span class="bottom-trangle"></span>
              </span>
              <span class="coupon-bg">
                满500减100
                <span class="top-trangle"></span>
                <span class="bottom-trangle"></span>
              </span>
            </p>
            <p class="integral"><span class="sign-text">积分</span>可获得35积分</p>
            <div class="icon-coupon-section" id="randomCouponSelector">
              <span>领券</span>
              <i class="icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'goodDetail',
  data () {
    return {
    }
  },
  props: {
    propOfGood: {
      type: Object,
      default: function () {
        return {
          seckill: true,
          imgs: [
            'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg',
            'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg',
            'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg'
          ],
          fullName: '珍贵全 天然维生素E软胶囊 需要补充维生素E的成人 0.45g*30s',
          secondKillGood: true,
          price: '194.80',
          oldPrice: 299.88,
          sellCount: 1700,
          effect: '治疗轻、中度高血压，对重度高血压可与其他降压药合用。',
          factory: '华润双鹤药业股份有限公司',
          promotions: {
            'immediate_discount': '首单随机立减',
            'free_shipping': '全场满58元免运费',
            'discount': '全场9.8折',
            'full_return': '2月15日--5月8日期间购买保健品品类满1元即可返生活用品300减50券和128减20券'
          },
          coupons: {},
          combination: [
            {
              name: '补肾加强调理',
              content: '是用以预防、治疗及诊断疾病的物质。在理论上，药物是指凡能影响机体器官生理功能及细胞代谢活动的化学物质都属于药物的范畴，也包括避孕药。',
              goods: [
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }, {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }
              ],
              totalPrice: 982.00,
              primaryPrice: 4800.0
            },
            {
              name: '补肾加强调理',
              content: '是用以预防、治疗及诊断疾病的物质。在理论上，药物是指凡能影响机体器官生理功能及细胞代谢活动的化学物质都属于药物的范畴，也包括避孕药。',
              goods: [
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }, {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }
              ],
              totalPrice: 982.00,
              primaryPrice: 4800.0
            },
            {
              name: '补肾加强调理',
              content: '是用以预防、治疗及诊断疾病的物质。在理论上，药物是指凡能影响机体器官生理功能及细胞代谢活动的化学物质都属于药物的范畴，也包括避孕药。',
              goods: [
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }, {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                },
                {
                  img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg',
                  name: '白云山 感冒感冒灵冲剂冲击',
                  price: '322.00'
                }
              ],
              totalPrice: 982.00,
              primaryPrice: 4800.0
            }
          ],
          goodNumber: '2040242',
          goodType: 'OTC药甲',
          approvalNumber: '国食健字G20100789',
          specification: '0.45g*30s',
          usage: '口服，一次1丸，一日2次。',
          commonName: '补肺丸',
          adverseRection: '尚不明确。',
          taboo: '外感咳嗽者忌服。',
          recommends: [
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            },
            {
              img: 'http://image.360hwj.com/goods/925259/4b52a073-86ab-414f-9d36-7caeb3e57949!400x400.jpg',
              name: '安瑞克 布洛芬颗粒 0.2克*12袋',
              price: 18.00,
              oldPrice: 59.00
            }
          ],
          isEmpty: true
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.goodDetail
  .goodDetail-partOne
    .slide-container
      position: relative;
      .cube-slide-dots
        font-size:normal;
        .pagination
          min-width: 2.69rem;
          height: 1.38rem;
          background-color: #000000;
          border-radius: 1.38rem;
          color: #fff;
          padding: 0.2rem 0.5rem;
          opacity: 0.3;
          position: absolute;
          z-index: 100;
          right: 1rem;
          left: unset;
          width: unset;
          bottom: 10px;
          line-height: 1.38rem;
          font-size: 1rem;
          .pagination-current
            font-weight: bold;
      .icon-otc
        position: absolute;
        display: block;
        background: url(./OTC@2x.png) center no-repeat;
        background-size: contain;
        width: 2.76rem;
        height: 1.72rem;
        top: 1.55rem;
        left: 1.55rem;
        z-index: 10;
      .icon-play
        position: absolute;
        display: block;
        background: url(./play_icon@2x.png) center no-repeat;
        background-size: contain;
        width: 4.14rem;
        height: 4.14rem;
        top: 45%;
        left: 45%;
        z-index: 10;
    .seckill
      width: 100%;
      height: 4.55rem;
      line-height: 4.55rem;
      .seckill-left
        width: 75%;
        height: 4.55rem;
        line-height: 4.55rem;
        padding-left: 0.69rem;
        padding-right: 0.41rem;
        background: linear-gradient(to right, #FD9B31 , #FD5900);
        box-sizing: border-box;
        float: left;
        display: flex;
        .seckill-left-partOne
          .now
            font-size: 1.38rem;
            color: #fffefe;
            float: left;
            .big
              font-size: 2.76rem;
              color: #fffefe;
              font-family: 'grundig din-medium';
              word-spacing: 0;
            div
              display: inline-block;
        .seckill-left-partTwo
          flex: 1;
          position: relative;
          .old
            font-size: 0.75rem;
            color: #fffefe;
            float: left;
            margin-left: 0.5rem;
            padding-top: 0.8rem;
            span
              text-decoration: line-through;
              font-family: 'PingFang Medium_1';
          p
            position: absolute;
            left: 0.5rem;
            font-size: 0.75rem;
            color: #fffefe;
            top: -0.5rem;
        .seckill-left-partThree
          flex: 1;
          .num
            font-size: 0.96rem;
            color: #fffefe;
            float: right;
            padding-top: 0.8rem;
            font-family: 'PingFang Medium_1';

      .seckill-right
        width: 25%;
        height: 4.55rem;
        line-height: 4.55rem;
        background: #FD9B31;
        box-sizing: border-box;
        float: right;
        font-size: 1rem;
        color: #fffefe;
        font-weight: bold;
        text-align: center;
        position: relative;
        padding: 0.6rem 0rem;
        span
          display: inline-block;
          height: 1.8rem;
          background: #FF5600;
          line-height: 1.8rem;
          text-align: center;
          font-weight: 100;
          border-radius: 5px;
          padding: 0 0.2rem;
        p
          position: absolute;
          left: 50%;
          top: -1rem;
          font-weight: 100;
          font-size: 0.8rem;
          width: 100%;
          transform: translate(-50%,0);
    .no-seckill
      width: 100%;
      height: 4.55rem;
      padding-left: 0.69rem;
      padding-right: 0.69rem;
      box-sizing: border-box;
      background: linear-gradient(to right, #FD9B31 , #FD5900);
      line-height: 4.55rem;
      .now
        font-size: 1.38rem;
        color: #fffefe;
        float: left;
        .big
          font-size: 2.76rem;
          color: #fffefe;
      .old
        font-size: 0.75rem;
        color: #fffefe;
        float: left;
        margin-left: 0.5rem;
        padding-top: 0.5rem;
        span
          text-decoration: line-through;
      .num
        font-size: 0.96rem;
        color: #fffefe;
        float: right;
        padding-top: 0.5rem;
    .goodDetail-name
      font-size: 1.1rem;
      color: #1a1a1a;
      background: #fff;
      line-height: 1.7rem;
      padding: 1.55rem 5.8rem 1.41rem 1.03rem;
      font-family: 'PingFang Bold_1';
  .goodDetail-partTwo
    margin-top: 0.69rem;
    background: #fff;
    padding-left: 1.03rem;
    padding-right: 0.58rem;
    font-family: 'PingFang Medium_1';
    .partTwo-item
      display: flex;
      padding-top: 1.38rem;
      line-height: 1.5rem;
      .item-title
        font-size: 0.96rem;
        color: #666666;
        flex-basis: 4.3rem;
        text-align: left;
      .item-content
        font-size: 0.96rem;
        color: #1a1a1a;
        flex: 1;
        padding-bottom: 1.38rem;
        margin-left: 0.8rem;
        .item-content-tip
          font-size: 0.9rem;
          color: #ff5900;
      &:not(:last-child)
        .item-content
          border-bottom: 1px solid #e6e6e6;

  .goodDetail-partThree
    margin-top: 0.69rem;
    background: #fff;
    padding-left: 1.03rem;
    padding-right: 0.58rem;
    font-family: 'PingFang Medium_1';
    .partThree-title
      font-size: 1.1rem;
      line-height: 1.1rem;
      color: #1a1a1a;
      padding-top: 1.38rem;
      position: relative;
      .icon-title
        width: 1.1rem;
        height: 1.1rem;
        background: url(./orange_icon@2x.png) left no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        left: -1.03rem;
        top: 1.38rem;
    .partThree-item
      display: flex;
      padding-top: 1.17rem;
      line-height: 1.5rem;
      .item-title
        font-size: 0.96rem;
        color: #666666;
        flex-basis: 3.86rem;
        text-align: right;
        box-sizing: border-box;
      .item-content
        font-size: 0.96rem;
        color: #1a1a1a;
        flex: 1;
        padding-bottom: 1.13rem;
        margin-left: 1.2rem;
        padding-right: 4rem;
        position: relative;
        .sign-text
          font-size: 0.69rem;
          color: #ff5900;
          border: 1px solid #ff5900;
          border-radius: 5px;
          margin-right: 1.1rem;
          vertical-align: middle;
          padding: 0.1rem 0.2rem;

        .icon-more
          background: url(./more_icon@2x.png) center no-repeat;
          background-size: contain;
          width: 1.1rem;
          height: 1.1rem;
          display: block;
          position: absolute;
          right: 0.69rem;
          top: 0;

        .coupon-bg
          background: #FF5900;
          height: 1.51rem;
          color: #ffffff;
          font-size: 0.69rem;
          display: inline-block;
          margin-right: 1.03rem;
          padding: 0 0.4rem;
          text-align: center;
          border-radius: 2px;
          position: relative;
          .top-trangle
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            display: inline-block;
            top: -0.15rem;
            left: 70%;
            background: #fff;
            transform: rotate(45deg);
          .bottom-trangle
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            display: inline-block;
            bottom: -0.2rem;
            left: 70%;
            background: #fff;
            transform: rotate(45deg);

        .integral
          margin-top: 0;
        .icon-coupon-section
          position: absolute;
          right: 0.69rem;
          top: 0;
          display: flex;
          align-items: center;
          span
            font-size: 0.96rem;
            color: #969696;
            padding-right: 0.2rem;
          .icon-arrow
            width: 0.9rem;
            height: 0.9rem;
            background: url(./arrow_right@2x.png) center no-repeat;
            background-size: contain;
            display: inline-block
        p
          &:not(:first-child)
            margin-top: 0.69rem;
      &:not(:last-child)
        .item-content
          border-bottom: 1px solid #e6e6e6;
</style>
