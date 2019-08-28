<template>
    <div class="joinPopup">
      <div class="join-popup-overlay">
      </div>
      <div class="join-popup-wrapper">
        <div class="join-popup-title">
          <div class="good-image">
            <img src="http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!600x600.jpg">
          </div>
          <div class="good-info">
            <p class="good-title">珍贵全&nbsp;天然维生素E软胶囊天然维</p>
            <p class="good-specification">0.45g*30s</p>
            <p class="good-price">￥<span class="stress-price">72</span>.00</p>
            <p class="good-number">商品编码：12345678</p>
          </div>
          <div class="icon-close-container" id="join_popup_close">
            <i class="icon-close"></i>
          </div>

        </div>
        <div class="join-popup-content">
          <div class="specification">
            <div class="title">
              规格
            </div>
            <div class="content">
              <span class="selected">0.5g*12粒*2板</span>
              <span class="no-selected">0.5g*12粒*4板</span>
              <span>感冒灵颗粒 10g*9袋</span>
            </div>
          </div>
          <div class="suit">
            <div class="title">
              疗程优惠装
            </div>
            <div class="content">
              <span class="selected combination-item">6件起&nbsp;&nbsp;|&nbsp;&nbsp;<span class="stress-price">180.00</span>元/件</span>
              <span class="combination-item">4件起&nbsp;&nbsp;|&nbsp;&nbsp;<span class="stress-price">175.00</span>元/件</span>
              <span class="combination-item">3件起&nbsp;&nbsp;|&nbsp;&nbsp;<span class="stress-price">100.00</span>元/件</span>
            </div>
          </div>
          <div class="quantity">
            <div class="title">数量</div>
            <div class="quantity-operator">
              <div class="icon-sub-container">
                <span class="icon-sub"></span>
              </div>
              <input type="number" value="1">
              <div class="icon-add-container">
                <span class="icon-add active"></span>
              </div>

            </div>
          </div>
        </div>
        <div class="join-popup-footer">
          <a>确认</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'joinPopup'
}
</script>

<style lang="stylus">
.joinPopup
  .join-popup-overlay
    z-index: 199;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    height: 100%;
    position: fixed;
    top: 0;
    background: #000000;
    opacity: 0.65;
    display: none;
  .join-popup-wrapper
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,100%,0);
    width: 100%;
    max-width: 640px;
    height: 39.05rem;
    position: fixed;
    bottom: 0;
    z-index: 200;
    font-family: 'PingFang Medium_1';
    margin: 0 auto;
    .join-popup-title
      width: 100%;
      height: 8.59rem;
      top: 0;
      background: #fff;
      position: relative;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      font-family: 'PingFang Bold_1';
      .good-image
        flex-basis: 9.6rem;
        padding-top: 0.5rem;
        box-sizing: border-box;
        img
          width: 8.09rem;
          height: 8.09rem;
          margin-left: 1.1rem;
      .good-info
        flex: 1;
        padding-left: 0.2rem;
        padding-top: 0.7rem;
        position: relative;
        margin-right: 4rem;
        .good-title
          font-size: 0.89rem;
          color: #1a1a1a;
          line-height: 1.2rem;
          text-align: left;
        .good-specification
          font-size: 0.89rem;
          color: #1a1a1a;
          line-height: 1rem;
          text-align: left;
        .good-price
          height: 1.8rem;
          line-height: 1.8rem;
          font-size: 0.88rem;
          color: #ff5900;
          text-align: left;
          position: absolute;
          bottom: 1.7rem;
          left: 0.2rem;
          span
            font-size: 1.3rem;
          .stress-price
            font-family: 'grundig din-medium';
        .good-number
          font-size: 0.89rem;
          color: #666666;
          text-align: left;
          height: 1.8rem;
          line-height: 1.8rem;
          position: absolute;
          bottom: 0;
          left: 0.2rem;
      .icon-close-container
        position: absolute;
        width: 2.89rem;
        height: 2.49rem;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .icon-close
          background: url(./close_iocn@2x.png) center no-repeat;
          background-size: contain;
          width: 0.89rem;
          height: 0.89rem;
          display: block;
          margin: 0 auto;
    .join-popup-content
      height: 26.56rem;
      position: absolute;
      bottom: 3.89rem;
      background: #fff;
      overflow: scroll;
      padding: 0 1.8rem 2rem 1.1rem;
      box-sizing: border-box;
      width: 100%;
      .specification
        padding: 2rem 0;
        .title
          font-size: 1.1rem;
          margin-bottom: 1.1rem;
        .content
          span
            margin-right: 1.03rem;
            margin-bottom: 1.03rem;
            font-size: 0.89rem;
            color: #2e2d2d;
            display: inline-block;
            border-radius: 1.91rem;
            background-color: #f6f6f6;
            padding: 0.51rem 0.69rem;
            &.selected
              color: #ff5900;
              border: 1px solid #ff5900;
              background: #FFEEE5;
            &.no-selected
              color: #dfdfdf;
              background: #f6f6f6;
      .suit
        .title
          font-size: 1.1rem;
          margin-bottom: 1.1rem;
        .content
          .combination-item
            font-size: 0.89rem;
            color: #272626;
            padding: 0.51rem 0.69rem;
            margin-right: 0.89rem;
            margin-bottom: 0.89rem;
            display: inline-block;
            background: #f6f6f6;
            border: 1px solid #e5e5e5;
        span
          &.selected
            color: #fff;
            background: #ff5900;
        .stress-price
          font-family: 'grundig din-medium';

      .quantity
        padding: 2rem 0;
        display: flex;
        align-items: center;
        .title
          font-size: 1.1rem;
        .quantity-operator
          margin-left: auto;
          .icon-sub-container
            display: inline-block;
            width: 2rem;
            height: 2.3rem;
            text-align: center;
            vertical-align: middle;
            line-height: 2.3rem;
            .icon-sub
              display: inline-block;
              width: 0.9rem;
              height: 0.9rem;
              background: url(./sub_gray@2x.png) center no-repeat;
              background-size: contain;
              vertical-align: middle;
              &.active
                background: url(./sub_black@2x.png) center no-repeat;
                background-size: contain;
          input
            width: 4rem;
            height: 2.3rem;
            background: #f6f6f6;
            text-align: center;
            vertical-align: middle;
            caret-color: #FF5722;
            margin: 0 0.2rem;
          .icon-add-container
            display: inline-block;
            width: 2rem;
            height: 2.3rem;
            text-align: center;
            vertical-align: middle;
            line-height: 2.3rem;
            .icon-add
              display: inline-block;
              width: 0.9rem;
              height: 0.9rem;
              background: url(./add_gray@2x.png) center no-repeat;
              background-size: contain;
              vertical-align: middle;
              &.active
                background: url(./add_black@2x.png) center no-repeat;
                background-size: contain;
    .join-popup-footer
      width: 100%;
      height: 3.89rem;
      position: absolute;
      bottom: 0;
      background: #fff;
      font-family: 'PingFang Bold_1';
      a
        display: inline-block;
        width: 90%;
        margin: 0 5% 0.89rem;
        font-size: 1.24rem;
        padding: 0.79rem 0;
        color: #fff;
        border-radius: 2.82rem;
        background: linear-gradient(to right, #FD9B31 , #FD5900);
        text-align: center;
  &.visible
    .join-popup-overlay
      display: none;
    .join-popup-wrapper
      transform: translate3d(0,0,0);
</style>
