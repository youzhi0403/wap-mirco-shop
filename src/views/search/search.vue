<template>
    <div class="search">
      <div class="search-header">
        <div class="search-header-form">
          <i class="icon-search vertical-center"></i>
          <input class="search-form-input" placeholder="感冒 咳嗽 流鼻涕">
          <i class="icon-scan vertical-center"></i>
        </div>
        <a class="search-text-cancel">取消</a>
      </div>
      <div class="search-content-container" v-if="propOfHistory[0]">
        <div class="search-history search-item">
          <div class="search-title">
            搜索历史
          </div>
          <div class="search-content">
            <span class="search-content-item" v-for="(item,index) in propOfHistory" :key="index">
              {{item}}
            </span>
          </div>
          <div class="icon-delete-container">
            <i class="icon-delete"></i>
            清空
          </div>
        </div>
        <div class="search-item">
          <div class="search-title">
            搜索发现
          </div>
          <div class="search-content">
            <span class="search-content-item" v-for="(item,index) in propOfDiscover" :key="index">
              {{item}}
            </span>
          </div>
        </div>
      </div>
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
export default {
  name: 'search',
  props: {
    propOfHistory: {
      type: Array,
      default: function () {
        return ['感冒', '减肥花茶', '儿童感冒发烧药儿童感冒发烧药', '咳嗽', '咳嗽']
      }
    },
    propOfDiscover: {
      type: Array,
      default: function () {
        return ['感冒', '减肥花茶', '儿童感冒发烧药儿童感冒发烧药', '咳嗽', '咳嗽']
      }
    }
  }
}
</script>

<style lang="stylus">
.search
  .search-header
    position: absolute;
    width: 100%;
    max-width: 640px;
    height: 2.2rem;
    margin-top: 0.9rem;
    .search-header-form
      position: absolute;
      top: 0;
      left: 5%;
      width: 80%;
      height: 2.2rem;
      line-height: 2.2rem;
      background: #F6F6F6;
      border: 0 solid;
      .icon-search
        width: 1.3rem;
        height: 1.3rem;
        background: url(./top_search_glass@2x.png) center no-repeat;
        background-size: contain;
        margin-left: 0.69rem;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
      .search-form-input
        width: 70%;
        margin-left: 2.68rem;
        caret-color: #FF5722;
        font-size: 0.96rem;
      .icon-scan
        width: 1.3rem;
        height: 1.3rem;
        background: url(./top_search_scan@2x.png) center no-repeat;
        background-size: contain;
        right: 0.69rem;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
    .search-text-cancel
      top: 0;
      height: 2.2rem;
      line-height: 2.2rem;
      color: #9E9E9E;
      float: right;
      font-size: 0.96rem;
      display: inline-block;
      width: 3.5rem;
      letter-spacing: 1px;
      box-sizing: border-box;
      padding-left: 0.5rem;
  .search-content-container
    position: absolute;
    top: 3.2rem;
    left: 0;
    width: 100%;
    padding-top: 1.55rem;
    .search-item
      position: relative;
      margin-left: 1.38rem;
      padding-top: 1.03rem;
      box-sizing: border-box;
      margin-right: 0.69rem;
      padding-bottom: 0.34rem;
      .search-title
        font-size: 1.1rem;
        line-height: 1.1rem;
        color: #010000;
        font-weight: 700;
        font-family: 'PingFang Bold_1';
      .search-content
        box-sizing: border-box;
        padding-top: 1.03rem;
        .search-content-item
          display: inline-block;
          font-size: 0.96rem;
          color: #333333;
          margin-right: 0.69rem;
          padding: 0 0.69rem;
          background-color: #f8f8f8;
          height: 2.07rem;
          line-height: 2.07rem;
          letter-spacing: 1px;
          margin-bottom: 0.69rem;
      .icon-delete-container
        position: absolute;
        right: 0.44rem;
        top: 0rem;
        font-size: 0.96rem;
        color: #979797;
        display: block;
        width: 3rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: right;
        .icon-delete
          position: absolute;
          top: 0.27rem;
          right: 2.2rem;
          width: 0.96rem;
          height: 0.96rem;
          background: url(./delete_icon@2x.png) center no-repeat;
          background-size: contain;
      &:not(:last-child)
        border-bottom: 1px solid #e6e6e6;
  .no-content-container
    .error-or-empty-img
      width: 9.24rem;
      height: 10.34rem;
      display: block;
      margin: 4rem auto 0 auto;
      background: url(./search_empty200.gif) center no-repeat;
      background-size: contain;
    .error-or-empty-text
      width: 100%;
      text-align: center;
      margin-top: 2rem;
      font-family: PingFang;
      font-size: 1.2rem;
      line-height: 1.2rem;
      color: #ababab;
</style>
