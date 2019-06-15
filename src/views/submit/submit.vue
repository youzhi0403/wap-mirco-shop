<template>
    <div class="submit">
      <div class="submit-container">
        <div class="submit-address">
          <div class="submit-address-left">
            <i class="icon-position"></i>
          </div>
          <div class="submit-address-content">
            <p class="person-info"><span>赵敏敏</span><span>182****5420</span></p>
            <p class="address-info">广东省广州市天河区科韵路信息港信息港信息港C1903</p>
            <i class="icon-right-arrow"></i>
          </div>
        </div>
        <div class="address-border-bottom"></div>
        <div class="submit-goods">
          <div class="submit-goods-item">
            <div class="item-wrapper">
              <a class="item-image">
                <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg">
              </a>
              <div class="item-detail">
                <p class="item-detail-name">
                  <span>补肾加强调理</span>
                  乐天 补肺丸(乐天) 9g*10丸*4板
                </p>
                <p class="item-detail-specification">规格: 9g*10丸*4板</p>
                <p class="item-detail-price">￥278.00</p>
                <div class="item-detail-quantity">x1</div>
              </div>
            </div>
            <div class="item-combo">
              <div class="combo-arrow"></div>
              <p class="combo-title">补肾加强调理套餐</p>
              <p class="combo-item">中化 头孢拉定胶囊 0.25g*24s<span>x1</span></p>
              <p class="combo-item">艾锐 头孢拉定胶囊头孢拉定胶囊 3片*1般<span>x2</span></p>
              <p class="combo-item">拜耳 阿司匹林长溶片 100mg*30片<span>x1</span></p>
            </div>
          </div>
          <div class="submit-goods-item">
            <div class="item-wrapper">
              <a class="item-image">
                <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!400x400.jpg">
              </a>
              <div class="item-detail">
                <p class="item-detail-name">
                  乐天 补肺丸(乐天) 9g*10丸*4板
                </p>
                <p class="item-detail-specification">规格: 9g*10丸*4板</p>
                <p class="item-detail-price">￥278.00</p>
                <div class="item-detail-quantity">x1</div>
              </div>
            </div>
          </div>
        </div>
        <div class="submit-way">
          <div class="submit-way-item" id="randomCouponSelector">
            <span class="item-left">购物津贴</span><span class="item-right">10元购物津贴券</span><i class="icon-more"></i>
          </div>
          <div class="submit-way-item" id="randomDiscountSelector">
            <span class="item-left">商家优惠</span><span class="item-right">20元购物津贴券</span><i class="icon-more"></i>
          </div>
          <div class="submit-way-item" id="randomDeliverySelector">
            <span class="item-left">配送方式</span><span class="item-right">5元邮费券</span><i class="icon-more"></i>
          </div>
          <div class="submit-way-item submit-way-message">
            <span class="item-left">买家留言：</span><input type="text" placeholder="选填: 填写内容已和商家协商确定">
          </div>
        </div>
        <div class="submit-price">
          <div class="submit-price-item">
            <span class="item-left">商品金额</span>
            <span class="item-right">￥142.00</span>
          </div>
          <div class="submit-price-item">
            <span class="item-left">津贴</span>
            <span class="item-right">-￥10.00</span>
          </div>
          <div class="submit-price-item">
            <span class="item-left">优惠</span>
            <span class="item-right">-￥20.00</span>
          </div>
          <div class="submit-price-item">
            <span class="item-left">运费</span>
            <span class="item-right">-￥5.00</span>
          </div>
          <div class="submit-price-total">
            <span class="total-price">合计：<span>￥107.00</span></span>
            <span class="total-number">共<label>5</label>件商品</span>
          </div>
        </div>
      </div>

      <div class="submit-footer">
        <div class="operator-container">
          <span class="operator-all">总计:<span class="price">￥142</span></span>
          <a class="operator-button">提交订单</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'submit'
}
</script>

<style lang="stylus">
.submit
  .submit-container
    width: 100%;
    padding-bottom: 4.2rem;
    font-family: 'PingFang Medium_1';
    .submit-address
      width: 100%;
      display: flex;
      margin-top: 0.69rem;
      background-color: #fff;
      .submit-address-left
        flex-basis: 3.13rem;
        text-align: center;
        align-self: center;
        .icon-position
          display: inline-block;
          width: 1.2rem;
          height: 1.3rem;
          background: url(./address_position@2x.png) center no-repeat;
          background-size: contain;
      .submit-address-content
        flex: 1;
        margin-right: 4.83rem;
        position: relative;
        .person-info
          font-size: 1.24rem;
          color: #000000;
          line-height: 3.31rem;
          font-weight: bold;
          span
            display: inline-block;
            margin-right: 1.58rem;
            font-family: 'PingFang Bold_1';

        .address-info
          font-size: 0.89rem;
          color: #313131;
          padding-bottom: 0.69rem;
        .icon-right-arrow
          width: 1rem;
          height: 1rem;
          display: inline-block;
          background: url(./address_arrow_right@2x.png) center no-repeat;
          background-size: contain;
          position: absolute;
          right: -3.5rem;
          bottom: 2.5rem;
    .address-border-bottom
      height: .4rem;
      background: url(./address_line@2x.png) center no-repeat;
      background-size: cover;
    .submit-goods
      width: 100%;
      margin-top: 0.69rem;
      .submit-goods-item
        width: 100%;
        padding-bottom: 1.38rem;
        background: #fff;
        .item-wrapper
          width: 100%;
          padding-top: 1.38rem;
          height: 6.34rem;
          display: flex;
          position: relative;
          .item-image
            width: 6.34rem;
            height: 6.34rem;
            flex-basis: 6.34rem;
            border: 1px solid #eee;
            position: relative;
            background-color: #f6f6f6;
            margin: 0 0.86rem 0 1.38rem;
            img
              width: 85%;
              height: 85%;
              vertical-align: middle;
              position: absolute;
              top: 7.5%;
              left: 7.5%;
          .item-detail
            position: relative;
            display: inline-block;
            margin-left: 0.86rem;
            flex: 1;
            margin-right: 1.38rem;
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
                font-family: "PingFang Bold_1";
            .item-detail-specification
              font-size: 0.82rem;
              color: #8d8d8d;
            .item-detail-price
              font-size: 1.03rem;
              color: #f1002d;
              bottom: 0;
              position: absolute;
            .item-detail-quantity
              position: absolute;
              right: 0rem;
              bottom: 1.8rem;
              height: 1.86rem;
              color: #8d8d8d;
        .item-combo
          width: 90%;
          margin-left: 1.38rem;
          margin-right: 1.38rem;
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
            margin-left: 0.4rem;
            position: relative;
            z-index: 10;
            font-family: 'PingFang Bold_1';
          .combo-item
            font-size: 0.82rem;
            line-height: 0.82rem;
            color: #8d8d8d;
            margin-left: 1.48rem;
            box-sizing: border-box;
            margin-bottom: 0.41rem;
            span
              float: right;
              margin-right: 1.48rem;
              color: #313131;
              font-weight: bold;
    .submit-way
      width: 100%;
      padding-top: 1.38rem;
      background: #fff;
      .submit-way-item
        width: 90%;
        margin: 0 5%;
        line-height: 3.79rem;
        height: 3.79rem;
        position: relative;
        border-top: 1px solid #f6f6f6;
        .item-left
          float: left;
          font-size: 1.03rem;
          color: #313131;
        .item-right
          float: right;
          font-size: 1.02rem;
          color: #313131;
          margin-right: 2.2rem;
        .icon-more
          display: block;
          width: 1.03rem;
          height: 1.03rem;
          position: absolute;
          bottom: 1.44rem;
          right: 0.44rem;
          background: url(./more_icon@2x.png) center no-repeat;
          background-size: contain;
        &.submit-way-message
          line-height: 1.79rem;
          height: 1.79rem;
          padding: 1rem 0;
        input
          float: left;
          width: 75%;
          font-size: 0.89rem;
          color: #8d8d8d;
    .submit-price
      margin-top: 0.69rem;
      background: #fff;
      padding: 0.69rem 1.38rem;
      .submit-price-item
        height: 2.41rem;
        line-height: 2.41rem;
        font-size: 1.03rem;
        color: #313131;
        .item-left
          float: left;
        .item-right
          font-size: 1.03rem;
          color: #f1002d;
          float: right;
          font-family: 'grundig din-medium';
      .submit-price-total
        font-size: 1.03rem;
        color: #313131;
        height: 3.79rem;
        line-height: 3.79rem;
        border-top: 1px solid #f6f6f6;
        .total-price
          float: right;
          span
            font-size: 1.03rem;
            color: #f1002d;
            font-family: 'grundig din-medium';
        .total-number
          float: right;
          margin-right: 1.17rem;
  .submit-footer
    position: fixed;
    bottom: 0;
    height: 3.5rem;
    width: 100%;
    max-width: 640px;
    line-height: 3.5rem;
    background: #fff;
    z-index: 8;
    box-shadow: 0 8px 30px grey;
    .operator-container
      float: right;
      margin-right: 0.82rem;
      .operator-all
        display: inline-block;
        font-size: 0.96rem;
        color: #313131;
        .price
          font-size: 1.03rem;
          color: #f1002d;
          font-family: 'grundig din-medium';
      .operator-button
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
