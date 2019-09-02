<template>
    <div class="test-swipe">
      <div class="goods-item-wrapper">
        <div class="weui-cell_swiped">
          <div class="shopcart-goods-item weui-cell__bd" style="transform: translate3d(0px, 0px, 0px);">
          </div>
          <div class="weui-cell__ft item-buttons">
            <a class="weui-swiped-btn weui-swiped-btn_default close-swipeout item-button item-close-button" href="javascript:">移入收藏</a>
            <a class="weui-swiped-btn weui-swiped-btn_warn delete-swipeout item-button item-delete-button" href="javascript:">删除</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'test-swipe'
}
</script>

<style lang="stylus">
.weui-cell_swiped
  position: relative;
  overflow: hidden;
  display: block;
  padding: 0;
  .weui-cell__bd
    transform: translate3d(0px, 0px, 0px);
    width: 100%;
    height: 6.34rem;
    display: flex;
    position: relative;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    position: relative;
    z-index: 1;
    background-color: #fff;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  .weui-cell__ft
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    color: #fff;
    text-align: right;
    color: #999;
    .weui-swiped-btn_default
      background-color: #FF8400;
      padding-top: 2.5rem;
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 10px 1em;
      line-height: 1.47058824;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    .weui-swiped-btn_warn
      background-color: #FF5A00;
      padding-top: 2.5rem;
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 10px 1em;
      line-height: 1.47058824;
      -webkit-tap-highlight-color: rgba(0,0,0,0);

</style>
