<template>
    <div class="keyboardPopup" :class="{'visible': visible}">
      <div class="keyboard-popup-wrapper visible">
        <div class="keyboard-title">
          <i class="icon-down-arrow keyboard-hide"></i>
          <i class="icon-up-arrow"></i>
          <span class="text keyboard-hide">完成</span>
        </div>
        <div class="keyboard-content">
          <div class="keyboard-item hover">
            1
          </div>
          <div class="keyboard-item hover">
            2
          </div>
          <div class="keyboard-item hover">
            3
          </div>
          <div class="keyboard-item hover">
            4
          </div>
          <div class="keyboard-item hover">
            5
          </div>
          <div class="keyboard-item hover">
            6
          </div>
          <div class="keyboard-item hover">
            7
          </div>
          <div class="keyboard-item hover">
            8
          </div>
          <div class="keyboard-item hover">
            9
          </div>
          <div class="keyboard-item hover">
            .
          </div>
          <div class="keyboard-item hover">
            0
          </div>
          <div class="keyboard-item hover">
            <i class="icon-delete"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'keyboardPopup',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style lang="stylus">
.keyboardPopup
  .keyboard-popup-wrapper
    height: 17.8rem;
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate(0,100%);
    width: 100%;
    position: fixed;
    max-width: 640px;
    margin: 0 auto;
    bottom: 0;
    z-index: 200;
    font-family: 'PingFang Medium_1';
    .keyboard-title
      width: 100%;
      height: 3.03rem;
      display: flex;
      align-items: center;
      background: #EFF0F1;
      border-top: 1px solid #D0D3DA;
      i
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
      .icon-down-arrow
        background: url(./keyboard_arrow_down@2x.png) center no-repeat;
        background-size: contain;
        margin-left: 1rem;
      .icon-up-arrow
        background: url(./keyboard_arrow_up@2x.png) center no-repeat;
        background-size: contain;
        margin-left: 1.5rem;
      .text
        margin-left: auto;
        font-size: 1.1rem;
        color: #ff5a00;
        margin-right: 1.24rem;

    .keyboard-content
      display: flex;
      justify-content: space-around;
      background: #D0D3DA;
      padding-top: 0.41rem;
      flex-wrap: wrap;
      .keyboard-item
        width: 8.073rem;
        height: 3.17rem;
        flex-basis: 8.07rem;
        line-height: 3.17rem;
        font-size: 1.6rem;
        text-align: center;
        color: #000000;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 0.41rem;
        .icon-delete
          width: 1.2rem;
          height: 1.2rem;
          display: inline-block;
          background: url(./keyboard_delete@2x.png) center no-repeat;
          background-size: contain;
  &.visible
    .keyboard-popup-wrapper
      transform: translate(0,0);
</style>
