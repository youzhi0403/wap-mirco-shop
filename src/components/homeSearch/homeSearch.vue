<template>
  <div class="home-container">
    <div class="home-search">
      <div class="left">
        <i class="icon-scan"></i>
      </div>
      <div class="center">
        <div class="search-form">
          <i class="icon-search"></i>
          <input class="search-form-input" placeholder="请输入名称搜索~" id="search-form-input">
        </div>
      </div>
      <div class="right">
        <i class="icon-message">
          <bubble :num="messageNum" v-if="messageNum > 0"></bubble>
        </i>
      </div>
    </div>
  </div>

</template>

<script>
import Bubble from '../bubble/bubble'
export default {
  name: 'homeSearch',
  components: { Bubble },
  data () {
    return {
      messageNum: 999
    }
  }
}
</script>

<style lang="stylus">
.home-search
  width: 100%;
  height: 3.44rem;
  display: flex;
  background: linear-gradient(to right, #FF8300 , #FD5900);
  background-repeat: repeat-y;
  padding-top: 0.62rem;
  padding-bottom: 0.93rem;
  box-sizing: border-box;
  position: fixed;
  max-width: 640px;
  top: 0;
  z-index: 200;
  outline: none;
  border: 0;
  .left
    width: 3.13rem;
    height: 100%;
    flex-basis: 3.13rem;
    position: relative;
    .icon-scan
      width: 1.27rem;
      height: 1.27rem;
      background: url(./home_scan@2x.png) center no-repeat;
      background-size: contain;
      display: block;
      position: absolute;
      top: 50%;
      left: 0.69rem;
      transform: translate3d(0,-50%,0);
  .center
    flex: 1;
    .search-form
      width: 100%;
      height: 2.2rem;
      background: #fff;
      position: relative;
      border-radius: 2px;
      .icon-search
        width: 1.27rem;
        height: 1.27rem;
        display: inline-block;
        background: url(./home_top_search_glass@2x.png) center no-repeat;
        background-size: contain;
        position: absolute;
        left: 0.62rem;
        top: 50%;
        transform: translate3d(0,-50%,0);
      input
        height: 100%;
        position: absolute;
        left: 2.51rem;
        width: 80%;
        font-size: 0.96rem;
        line-height: 2.2rem;
        caret-color: #FF5722;
  .right
    width: 3.47rem;
    height: 100%;
    flex-basis: 3.47rem;
    padding-top: 0.69rem;
    padding-left: 0.69rem;
    box-sizing: border-box;
    .icon-message
      width: 1.27rem;
      height: 1.27rem;
      background: url(./home_new@2x.png) center no-repeat;
      background-size: contain;
      display: block;
      position: relative;
      .bubble
        position: absolute;
        right: -0.75rem;
        top: -0.55rem;
</style>
