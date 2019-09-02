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
            <i class="icon-more" @click.stop.prevent="showPromotionPopup"></i>
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
            <div class="icon-coupon-section" @click.stop.prevent="showCouponPopup">
              <span>领券</span>
              <i class="icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>

      <!--第四部分-->
      <div class="goodDetail-partFour">
        <div class="partFour-title">
          组合推荐
          <i class="icon-title"></i>
        </div>
        <div class="partFour-description">
          <!-- 用tab选项卡来实现内容 -->
          <div class="description-title">
            <span v-for="(item,index) in propOfGood.combination" :key="index" :class="{highLight:index==combinationIndex}" @click.stop.prevent="combinationChange(index)">{{item.name}}</span>
          </div>

          <div class="description-wrapper">
            <div class="description-content">
              <p>
                {{currentCombination.content}}
              </p>
              <p class="tips">(此点评仅供参考，如有其他不适请咨询医师或药师)</p>
            </div>
            <div class="partFour-goods">
              <cube-scroll
                ref="scroll"
                direction="horizontal"
                class="goods-items-scroll"
              >
                <div class="goods-items">
                  <div class="goods-item" v-for="(item,index) in currentCombination.goods" :key="index">
                    <div class="goods-item-image">
                      <img :src="item.img" />
                      <i class="icon-add"></i>
                    </div>
                    <div class="goods-item-info">
                      <div class="goods-item-name">{{item.name}}</div>
                      <div class="goods-item-price">￥<span class="stress-price">{{item.price}}</span></div>
                    </div>
                  </div>
                </div>
              </cube-scroll>

            </div>
            <div class="partFour-shopCart">
              <p>合计<span style="margin-left: 0.5rem; color: #ff1e1e;fone-size:1.03rem;" class="stress-price">￥982.00</span></p>
              <p>立省<span class="stress-price">3.10</span>元,原价<span style="text-decoration: line-through" class="stress-price">4800.0</span>元</p>
              <div class="shopCart-button randomJoinSelector" @click.stop.prevent="showJoinPopup">
                加入购物车
              </div>
            </div>
          </div>

        </div>

      </div>

      <!--第五部分-->
      <div class="goodDetail-partFive">
        <div class="partFive-shopcart-title">
          <i class="icon-logo" style="margin-left: 0.4rem;vertical-align: middle;"></i>
          <i class="icon-fanxingou" style="margin-left: 0.4rem;vertical-align: middle;"></i>
          <span>全程保障</span>
          <span>购物无忧</span>
        </div>
        <div class="partFive-shopcart-content">
          <span><i class="icon-tick"></i>正品保证</span>
          <span><i class="icon-tick"></i>实体连锁</span>
          <span><i class="icon-tick"></i>药师服务</span>
          <span><i class="icon-tick"></i>隐私发货</span>
          <span><i class="icon-tick"></i>极度审核</span>
          <span><i class="icon-tick"></i>自提</span>
        </div>
        <i class="icon-more" @click.stop.prevent="showFanxingouPopup"></i>
      </div>

      <!--第六部分-->
      <div class="goodDetail-partSix">
        <div class="partSix-title">
          药品监管部门提示
          <i class="icon-title"></i>
        </div>
        <div class="partSix-tips">
          如发现本店有任何直接或变相销售处方行为，请保留证据拨打12331举报，举报查实给予奖励！
        </div>
        <div class="partSix-content">
          <p><span>1</span>处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。</p>
          <p><span>2</span>处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。</p>
          <p><span>3</span>处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。</p>
          <p><span>4</span>处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。</p>
        </div>
      </div>

      <!--第七部分 继续拖动查看商品详情-->
      <div class="goodDetail-partSeven">
        <span></span>
        <span class="text">继续拖动，查看商品详情</span>
        <span></span>
      </div>

      <!--第八部分-->
      <div class="goodDetail-partEight">
        <div class="partEight-title">
          商品信息
          <i class="icon-title"></i>
        </div>
        <div class="partEight-table">
          <div class="table-row">
            <div class="row-left">商品编号</div>
            <div class="row-right">2040242</div>
          </div>
          <div class="table-row">
            <div class="row-left">商品类型</div>
            <div class="row-right">OTC药甲</div>
          </div>
          <div class="table-row">
            <div class="row-left">功能主治</div>
            <div class="row-right">补肺益气，止咳平喘。用于肺气不足，气短喘咳，咳声低弱，干咳痰粘，咽干舌燥。</div>
          </div>
          <div class="table-row">
            <div class="row-left">生产厂家</div>
            <div class="row-right">山东圣海保健品有限公司</div>
          </div>
          <div class="table-row">
            <div class="row-left">批准问号</div>
            <div class="row-right">
              国食健字G20100789<br>
              <a>国家食药局查询</a>
            </div>
          </div>
          <div class="table-row">
            <div class="row-left">产品规格</div>
            <div class="row-right">0.45g*30s</div>
          </div>
          <div class="table-row">
            <div class="row-left">用法用量</div>
            <div class="row-right">口服，一次1丸，一日2次。</div>
          </div>
          <div class="table-row">
            <div class="row-left">通用名称</div>
            <div class="row-right">补肺丸</div>
          </div>
          <div class="table-row">
            <div class="row-left">不良反应</div>
            <div class="row-right">尚不明确。</div>
          </div>
          <div class="table-row">
            <div class="row-left">禁忌</div>
            <div class="row-right">外感咳嗽者忌服。</div>
          </div>
        </div>
      </div>

      <!--第九部分-->
      <div class="goodDetail-partNine">
        <div class="partNine-title">
          图文详情
          <i class="icon-title"></i>
        </div>
        <div class="partNine-content">
          <img :src="item" v-for="(item,index) in propOfGood.imgs" :key="index">
        </div>
      </div>

      <!--第十部分-->
      <div class="goodDetail-partTen">
        <div class="partTen-title">
          价格说明
        </div>
        <div class="partTen-content">
          <div class="partTen-item">
            <div class="item-title">
              划线价格
              <i class="icon-orange-point"></i>
            </div>
            <p class="item-content">
              处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。
            </p>
          </div>
          <div class="partTen-item">
            <div class="item-title">
              划线价格
              <i class="icon-orange-point"></i>
            </div>
            <p class="item-content">
              处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。
            </p>
          </div>
          <div class="partTen-item">
            <div class="item-title">
              异常问题
              <i class="icon-orange-point"></i>
            </div>
            <p class="item-content">
              处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。
            </p>
          </div>
        </div>
      </div>

      <!--第十一部分-->
      <div class="goodDetail-partEleven">
        <div class="partEleven-title">
          售后服务
        </div>
        <div class="partEleven-content">
          <div class="partEleven-item">
            <div class="item-title">
              退货政策
              <i class="icon-orange-point"></i>
            </div>
            <p class="item-content">
              1.处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明书并在医师指导下使用。
              <br>
              2.处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明
              <br>
              3.处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药请仔细阅读说明
              <br>
              &nbsp;&nbsp;(1)处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药
              <br>
              &nbsp;&nbsp;(2)处方药请凭处方药购买，本广告仅供医学专业人士阅读。使用处方药
            </p>
          </div>
        </div>
      </div>

      <!--药师推荐-->
      <div class="shopcart-goods-recommend">
        <div class="recommend-title">
          <i class="icon-recommend"></i>
          <span>药师推荐</span>
          <i class="icon-recommend"></i>
        </div>
        <goods-list></goods-list>
      </div>

      <!--商品详情底部-加入购物车车-->
      <div class="goodDetail-footer" v-show="propOfGood.footerStatus == 'shopCart'">
        <div class="footer-left">
          <a class="service"><i class="icon-service"></i><p>客服</p><span class="num">14</span></a>
          <a class="collect"><i class="icon-collect active"></i><p>收藏</p></a>
          <a class="shopcart"><i class="icon-shopcart"></i><p>购物车</p></a>
        </div>
        <div class="footer-right">
          <a class="randomJoinSelector" @click.stop.prevent="showJoinPopup">加入购物车</a>
        </div>
      </div>

      <!--商品详情底部-加入需求单-->
      <div class="goodDetail-footer no-inventory" v-show="propOfGood.footerStatus == 'no-inventory'">
        <div class="footer-left">
          <a class="service"><i class="icon-service"></i><p>客服</p><span class="num">14</span></a>
          <a class="collect"><i class="icon-collect active"></i><p>收藏</p></a>
          <a class="shopcart"><i class="icon-demand"></i><p>需求单</p></a>
        </div>
        <div class="footer-right">
          <a>加入需求单</a>
        </div>
      </div>

      <!--商品详情底部-已售空-->
      <div class="goodDetail-footer sell-out" v-show="propOfGood.footerStatus == 'sell-out'">
        <div class="footer-left">
          <a class="service"><i class="icon-service"></i><p>客服</p><span class="num">14</span></a>
          <a class="collect"><i class="icon-collect active"></i><p>收藏</p></a>
          <a class="shopcart"><i class="icon-demand"></i><p>需求单</p><span class="num">4</span></a>
        </div>
        <div class="footer-right">
          <a>查看药师推荐</a>
        </div>
      </div>
      <!--售空提示-->
      <div class="goodDetail-sell-out-recommend" v-show="propOfGood.footerStatus == 'sell-out'">
        商品已售空，非常抱歉!
      </div>

      <!--促销popup-->
      <promotion-popup :propOfPromotions="propOfGood.promotions" ref="promotionPopup"></promotion-popup>

      <!--优惠券popup-->
      <coupon-popup ref="couponPopup"></coupon-popup>

      <!--加入购物车popup-->
      <join-popup :prop-of-visible="false" ref="joinPopup"></join-popup>

      <!--放心购popup-->
      <fanxingou-popup ref="fanxingouPopup"></fanxingou-popup>

      <!--更多功能悬浮框-->
      <float-buttons></float-buttons>
    </div>
</template>

<script>
import GoodsList from '../../components/goodsList/goodsList'
import PromotionPopup from '../../components/promotionPopup/promotionPopup'
import CouponPopup from '../../components/couponPopup/couponPopup'
import JoinPopup from '../../components/joinPopup/joinPopup'
import FanxingouPopup from '../../components/fanxingouPopup/fanxingouPopup'
import FloatButtons from '../../components/floatButtons/floatButtons'
export default {
  name: 'goodDetail',
  components: { FloatButtons, FanxingouPopup, JoinPopup, CouponPopup, PromotionPopup, GoodsList },
  data () {
    return {
      /* 商品当前组合的index */
      combinationIndex: 0,
      /* 当前的商品组合 */
      currentCombination: {}
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
            'http://image.360hwj.com/goods/931509/c6ca9822-d8cf-4bbe-9947-d80b1982742c!source.hwj.jpg',
            'http://image.360hwj.com/goods/931509/7c8d6b45-f3ed-4f25-bd7c-685e1f51e19e!source.hwj.jpg'
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
          /* 有三种状态：shopCart-加入购物车，no-inventory-加入需求单，sell-out-已售空 */
          footerStatus: 'shopCart'
        }
      }
    }
  },
  methods: {
    combinationChange (index) {
      this.combinationIndex = index
      this.currentCombination = this.propOfGood.combination[index]
    },
    showPromotionPopup () {
      this.$refs['promotionPopup'].showPopup()
    },
    showCouponPopup () {
      this.$refs['couponPopup'].showPopup()
    },
    showJoinPopup () {
      this.$refs['joinPopup'].showJoinPopup()
    },
    showFanxingouPopup () {
      this.$refs['fanxingouPopup'].showFanxingouPopup()
    }
  },
  created () {
    this.combinationIndex = 0
    this.currentCombination = this.propOfGood.combination[0]
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
  .goodDetail-partFour
    margin-top: 0.69rem;
    background: #fff;
    padding: 0 0.58rem 0.8rem 1.03rem;
    font-family: 'PingFang Medium_1';
    .stress-price
      font-family: 'grundig din-medium';
    .partFour-title
      font-size: 1.1rem;
      line-height: 1.1rem;
      color: #1a1a1a;
      padding-top: 1.38rem;
      position: relative;
      font-family: 'PingFang Bold_1';
      .icon-title
        width: 1.1rem;
        height: 1.1rem;
        background: url(./orange_icon@2x.png) left no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        left: -1.03rem;
        top: 1.38rem;
    .partFour-description
      .description-title
        margin-top: 1.17rem;
        font-size: 0;
        span
          margin-right: 1.38rem;
          font-size: 0.96rem;
          color: #cecece;
          border: 1px solid #cecece;
          border-radius: 1px;
          box-sizing: border-box;
          padding: 0.1rem;
          &.highLight
            color: #ff5900;
            border: 0;
            background: #FFEEE5;
            font-family: 'PingFang Bold_1';

      .description-wrapper
        .description-content
          font-size: 0.82rem;
          color: #1a1a1a;
          margin-top: 1.17rem;
          p
            line-height: 1.4rem;
          .tips
            font-size: 0.75rem;
            color: #ff5900;
            margin-top: 0.75rem;

        .partFour-goods
          margin-top: 1.72rem;
          margin-bottom: 0.5rem;
          .goods-items-scroll
            .cube-scroll-content
              display: inline-block;
            .goods-items
              white-space: nowrap;
              .goods-item
                display: inline-block;
                width: 6.9rem;
                margin-right: 30px;
                .goods-item-image
                  width: 100%;
                  position: relative;
                  img
                    width: 100%;
                    height: 100%;
                  .icon-add
                    width: 1rem;
                    height: 1rem;
                    display: block;
                    position: absolute;
                    background: url(./add@2x.png) center no-repeat;
                    background-size: contain;
                    top: 3rem;
                    right: -1.7rem;
                .goods-item-info
                  margin-top: 1.1rem;
                  .goods-item-name
                    font-size: 0.82rem;
                    color: #1a1a1a;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    line-height: 20px;
                  .goods-item-price
                    font-size: 0.82rem;
                    color: #1a1a1a;
                    text-align: left;
                    line-break: 20px;
                    .stress-price
                      font-family: 'grundig din-medium'
                &:last-child
                  margin-right: 0px;
                  .icon-add
                    display: none;
        .partFour-shopCart
          font-size: 0.96rem;
          color: #1a1a1a;
          padding-top: 1.2rem;
          padding-bottom: 0.69rem;
          border-top: 1px solid #f6f6f6;
          line-height: 1.72rem;
          position: relative;
          p
            margin: 0;
          .shopCart-button
            font-size: 1.1rem;
            color: #fff;
            padding: 0.4rem 0.6rem;
            background-color: #ff5900;
            border-radius: 3px;
            position: absolute;
            right: 0.69rem;
            bottom: 1.2rem;
  .goodDetail-partFive
    margin-top: 0.69rem;
    background: #fff;
    padding: 0 0.58rem 0.8rem 1.03rem;
    position: relative;
    line-height: 20px;
    .partFive-shopcart-title
      padding-top: 1.03rem;
      font-family: 'PingFang Bold_1';
      .icon-logo
        background: url(./shield@2x.png) center no-repeat;
        background-size: contain;
        width: 1rem;
        height: 1rem;
        display: inline-block;
      span
        font-size: 0.96rem;
        color: #ff5900;
    .partFive-shopcart-content
      width: 100%;
      font-size: 0.82rem;
      padding-left: 0.4rem;
      font-family: 'PingFang Medium_1';
      span
        width: 22%;
        display: inline-block;
        margin-top: 0.4rem;
        color: #666666;
        font-size: 0.82rem;
        .icon-tick
          background: url(./gou@2x.png) center no-repeat;
          background-size: contain;
          width: 1rem;
          height: 1rem;
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.4rem;

    .icon-more
      background: url(./more_icon@2x.png) center no-repeat;
      background-size: contain;
      width: 1rem;
      height: 1rem;
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      right: 1.3rem;
      top: 1.2rem;
  .goodDetail-partSix
    margin-top: 0.6rem;
    background: #fff;
    padding: 0 0.58rem 1.41rem 1.03rem;
    font-family: 'PingFang Medium_1';
    .partSix-title
      padding-top: 1.34rem;
      font-size: 1.1rem;
      line-height: 1.1rem;
      color: #1a1a1a;
      position: relative;
      font-family: 'PingFang Bold_1';
      .icon-title
        width: 1.1rem;
        height: 1.1rem;
        background: url(./orange_icon@2x.png) left no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        left: -1.03rem;
        top: 1.38rem;
    .partSix-tips
      margin-top: 1.13rem;
      font-size: 0.79rem;
      line-height: 1.2rem;
      color: #ff5900;
      font-family: 'PingFang Bold_1';
    .partSix-content
      margin-top: 1.03rem;
      font-size: 0.79rem;
      color: #666666;
      line-height: 20px;
      span
        display: inline-block;
        border: 1px solid #666666;
        border-radius: 50%;
        margin-right: 0.5rem;
        width: 0.6rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        padding: 0.1rem;

  .goodDetail-partSeven
    height: 3.10rem;
    line-height: 3.10rem;
    text-align: center;
    font-size: 0.86rem;
    color: #666666;
    font-family: 'PingFang Medium_1';
    span
      &:nth-child(odd)
        width: 20%;
        border-top: 1px solid #666666;
        display: inline-block;
        vertical-align: middle;
        opacity: 0.2;
    .text
      margin: 0 0.93rem;
  .goodDetail-partEight
    padding: 1.34rem 0.58rem 1.41rem 1.03rem;
    background: #fff;
    font-family: 'PingFang Medium_1';
    .partEight-title
      font-size: 1.1rem;
      line-height: 1.1rem;
      color: #1a1a1a;
      padding-bottom: 1.17rem;
      position: relative;
      font-family: 'PingFang Bold_1';
      .icon-title
        width: 1.1rem;
        height: 1.1rem;
        background: url(./orange_icon@2x.png) left no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        left: -1.03rem;
        top: 0;
    .partEight-table
      border: 1px solid #e7e7e7;
      line-height: 20px;
      .table-row
        display: flex;
        .row-left
          font-size: 0.75rem;
          color: #666666;
          width: 5rem;
          padding: 0.69rem;
          box-sizing: border-box;
          border-right: 1px solid #e7e7e7;
        .row-right
          flex: 1;
          font-size: 0.75rem;
          color: #1a1a1a;
          padding: 0.79rem 1.17rem;
          a
            color: #025dbe;
        &:not(:last-child)
          border-bottom: 1px solid #e7e7e7;
  .goodDetail-partNine
    margin-top: 0.69rem;
    background: #fff;
    padding: 1.34rem 0.58rem 1.41rem 1.03rem;
    .partNine-title
      font-size: 1.1rem;
      color: #1a1a1a;
      padding-bottom: 1.17rem;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      font-family: 'PingFang Bold_1';
      line-height: 1.1rem;
      .icon-title
        width: 1.1rem;
        height: 1.1rem;
        background: url(./orange_icon@2x.png) left no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        left: -1.03rem;
        top: 0rem;
    .partNine-content
      img
        width: 100%;
        vertical-align: middle;
  .goodDetail-partTen
    margin-top: 0.69rem;
    background: #fff;
    padding: 1.34rem 0.58rem 1.41rem 1.03rem;
    font-family: 'PingFang Medium_1';
    .partTen-title
      font-size: 1.1rem;
      color: #666666;
      padding-bottom: 1.17rem;
    .partTen-content
      line-height:20px;
      .partTen-item
        margin-bottom: 0.69rem;
        padding-left: 0.65rem;
        .item-title
          font-size: 0.96rem;
          color: #1a1a1a;
          position: relative;
          font-family: 'PingFang Bold_1';
          font-weight: bold;
          .icon-orange-point
            width: 0.96rem;
            height: 0.96rem;
            display: block;
            background: url(./orange_point@2x.png) left no-repeat;
            position: absolute;
            top: 0.15rem;
            left: -0.8rem;
            vertical-align: middle;
        .item-content
          font-size: 0.96rem;
          color: #666666;
  .goodDetail-partEleven
    margin-top: 0.69rem;
    background: #fff;
    padding: 1.34rem 0.58rem 1.41rem 1.03rem;
    font-family: 'PingFang Medium_1';
    line-height: 20px;
    .partEleven-title
      font-size: 1.1rem;
      color: #666666;
      padding-bottom: 1.17rem;
    .partEleven-content
      .partEleven-item
        margin-bottom: 0.69rem;
        padding-left: 0.65rem;
        .item-title
          font-size: 0.96rem;
          color: #1a1a1a;
          position: relative;
          font-family: 'PingFang Bold_1';
          font-weight: bold;
          .icon-orange-point
            width: 0.96rem;
            height: 0.96rem;
            display: block;
            background: url(./orange_point@2x.png) left no-repeat;
            position: absolute;
            top: 0.15rem;
            left: -0.8rem;
            vertical-align: middle;
        .item-content
          font-size: 0.96rem;
          color: #666666;
  .shopcart-goods-recommend
    width: 100%;
    background-color: #f6f6f6;
    padding-bottom: 4.5rem;
    font-family: 'PingFang Medium_1';
    .recommend-title
      margin: 0 auto;
      text-align: center;
      padding: 1.72rem 0.69rem;
      font-family: 'PingFang Bold_1';
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
    .goodsList
      padding-top: 0;
  .goodDetail-footer
    width: 100%;
    height: 3.9rem;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 10;
    max-width: 640px;
    font-family: 'PingFang Bold_1';
    box-shadow: 0 8px 30px grey;
    .footer-left
      padding-top: 0.35rem;
      width: 50%;
      float: left;
      display: flex;
      box-sizing: border-box;
      a
        flex: 1;
        font-size: 0.69rem;
        color: #333333;
        align-self: center;
        text-align: center;
        position: relative;
        i
          width: 1.7rem;
          height: 1.7rem;
          display: inline-block;
          vertical-align: middle;
        .icon-service
          background: url(./custom_serv@2x.png) center no-repeat;
          background-size: contain;
        .icon-collect
          background: url(./star_gray@2x.png) center no-repeat;
          background-size: contain;
          &.active
            background: url(./star_red@2x.png) center no-repeat;
            background-size: contain;
        .icon-demand
          background: url(./Tab_listing@2x.png) center no-repeat;
          background-size: contain;
        .icon-shopcart
          background: url(./tab_car@2x.png) center no-repeat;
          background-size: contain;
        p
          line-height: 20px;
        .num
          display: inline-block;
          height: 1rem;
          line-height: 1rem;
          border-radius: 1rem;
          background: #FF5722;
          color: #fff;
          text-align: center;
          font-size: 0.8rem;
          position: absolute;
          left: 2.2rem;
          top: -0.2rem;
          padding: 0 0.3rem;
    .footer-right
      width: 50%;
      float: right;
      padding: 0.55rem 1.03rem;
      box-sizing: border-box;
      a
        width: 9.66rem;
        height: 2.79rem;
        line-height: 2.79rem;
        text-align: center;
        background: linear-gradient(to right, #FD9B31 , #FD5900);
        border-radius: 5px;
        font-size: 0.96rem;
        color: #ffffff;
        display: inline-block;
        float: right;
        letter-spacing: 2px;
    &.sell-out
      .footer-right
        a
          background: linear-gradient(to right, #FF9E33 , #FEC139);
  .goodDetail-sell-out-recommend
    position: fixed;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    height: 2.41rem;
    z-index: 10;
    bottom: 3.9rem;
    background-color: #191919;
    opacity: 0.8;
    line-height: 2.41rem;
    text-align: center;
    font-size: 0.89rem;
    color: #ffffff;
    font-family: 'PingFang Medium_1';
</style>
